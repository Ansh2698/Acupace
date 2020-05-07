import {Component, NgZone, OnInit, ViewEncapsulation} from '@angular/core';
import {NextConfig} from '../../../../app-config';
import {Location} from '@angular/common';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurationComponent implements OnInit {
  public styleSelectorToggle: boolean; // open configuration menu
  public layoutType: string; // layout type
  public rtlLayout: any; // rtl type
  public menuFixedLayout: any; // menu/navbar fixed flag
  public headerFixedLayout: any; // header fixed flag
  public boxLayout: any; // box layout flag
  public headerBackgroundColor: string; // header background color
  public brandBackgroundColor: string; // brand/logo background color

  public headerBackColor: string;

  public nextConfig: any;
  public isConfig: boolean;

  scroll = (): void => {
    if (this.headerFixedLayout === false) {
      (document.querySelector('#nav-ps-next') as HTMLElement).style.maxHeight = 'calc(100vh)';
      const el = document.querySelector('.pcoded-navbar.menupos-fixed') as HTMLElement;
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 60) {
        el.style.position = 'fixed';
        el.style.transition = 'none';
        el.style.marginTop = '0';
      } else {
        el.style.position = 'absolute';
        el.style.marginTop = '60px';
      }
    } else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
      document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
    }
  }

  constructor(private zone: NgZone, private location: Location) {
    this.nextConfig = NextConfig.config;
    this.setThemeLayout();
  }

  ngOnInit() {
    this.styleSelectorToggle = false;

    this.layoutType =  this.nextConfig.layoutType;
    this.setLayout(this.layoutType);

    this.headerBackgroundColor = this.nextConfig.headerBackColor;
    this.brandBackgroundColor = this.nextConfig.navBrandColor;

    this.setHeaderBackground(this.headerBackgroundColor);
    this.setBrandBackground(this.brandBackgroundColor);

    this.rtlLayout = this.nextConfig.rtlLayout;
    this.changeRtlLayout(this.rtlLayout);

    this.menuFixedLayout = this.nextConfig.navFixedLayout;
    if (this.nextConfig.layout === 'vertical') {
      this.changeMenuFixedLayout(this.menuFixedLayout);
    }

    this.headerFixedLayout = this.nextConfig.headerFixedLayout;
    this.changeHeaderFixedLayout(this.headerFixedLayout);

    this.boxLayout = this.nextConfig.boxLayout;
    this.changeBoxLayout(this.boxLayout);
  }

  setThemeLayout() {
    let currentURL = this.location.path();
    const baseHref = this.location['_baseHref'];
    if (baseHref) {
      currentURL = baseHref + this.location.path();
    }

    switch (currentURL) {
      case baseHref + '/layout/static':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.navFixedLayout = false;
        this.nextConfig.headerFixedLayout = false;
        break;
      case baseHref + '/layout/fixed':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.navFixedLayout = true;
        this.nextConfig.headerFixedLayout = true;
        break;
      case baseHref + '/layout/nav-fixed':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.navFixedLayout = true;
        this.nextConfig.headerFixedLayout = false;
        break;
      case baseHref + '/layout/collapse-menu':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.collapseMenu = true;
        break;
      case baseHref + '/layout/vertical-rtl':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.rtlLayout = true;
        break;
      case baseHref + '/layout/horizontal':
        this.nextConfig.layout = 'horizontal';
        this.nextConfig.navFixedLayout = false;
        this.nextConfig.headerFixedLayout = false;
        break;
      case baseHref + '/layout/horizontal-l2':
        this.nextConfig.layout = 'horizontal';
        this.nextConfig.subLayout = 'horizontal-2';
        this.nextConfig.navFixedLayout = false;
        this.nextConfig.headerFixedLayout = false;
        break;
      case baseHref + '/layout/horizontal-rtl':
        this.nextConfig.layout = 'horizontal';
        this.nextConfig.subLayout = 'horizontal-2';
        this.nextConfig.navFixedLayout = false;
        this.nextConfig.headerFixedLayout = false;
        this.nextConfig.rtlLayout = true;
        break;
      case baseHref + '/layout/box':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.boxLayout = true;
        this.nextConfig.headerFixedLayout = false;
        this.nextConfig.collapseMenu = true;
        break;
      case baseHref + '/layout/light':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.layoutType = 'menu-light';
        this.nextConfig.headerBackColor = 'header-default';
        break;
      case baseHref + '/layout/dark':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.layoutType = 'dark';
        this.nextConfig.headerBackColor = 'header-blue';
        break;
      case baseHref + '/layout/nav-color':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.layoutType = 'menu-light';
        this.nextConfig.headerBackColor = 'header-info';
        this.nextConfig.navBrandColor = 'brand-info';
        this.nextConfig.navFixedLayout = true;
        this.nextConfig.headerFixedLayout = true;
        break;
      default:
        break;
    }
  }

  setHeaderBackColor(color) {
    this.headerBackColor = color;
    (document.querySelector('body') as HTMLElement).style.background = color;
  }

  // change main layout
  setLayout(layout) {
    this.isConfig = true;
    this.setBrandBackground(this.nextConfig.navBrandColor);
    document.querySelector('.pcoded-navbar').classList.remove('menu-light');
    document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
    document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
    document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
    document.querySelector('body').classList.remove('next-dark');

    this.layoutType = layout;
    if (layout === 'menu-light') {
      this.setBrandBackground(this.brandBackgroundColor);
      document.querySelector('.pcoded-navbar').classList.add(layout);
    }
    if (layout === 'dark') {
      document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
      document.querySelector('.pcoded-navbar').classList.add('brand-dark');

      this.setBrandBackground('brand-blue');
      this.setHeaderBackground('header-blue');

      document.querySelector('body').classList.add('next-dark');
    }
    if (layout === 'reset') {
      this.reset();
    }
  }

  reset() {
    document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
    this.ngOnInit();
  }

  setRtlLayout(e) {
    const flag = !!(e.target.checked);
    this.changeRtlLayout(flag);
  }

  changeRtlLayout(flag) {
    if (flag) {
      document.querySelector('body').classList.add('next-rtl');
    } else {
      document.querySelector('body').classList.remove('next-rtl');
    }
  }

  setMenuFixedLayout(e) {
    const flag = !!(e.target.checked);
    this.changeMenuFixedLayout(flag);
  }

  changeMenuFixedLayout(flag) {
    setTimeout(() => {
      if (flag) {
        document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
        document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');
        if (this.nextConfig.layout === 'vertical') {
          (document.querySelector('#nav-ps-next') as HTMLElement).style.maxHeight = 'calc(100vh - 60px)'; // calc(100vh - 70px) amit
        }
        window.addEventListener('scroll', this.scroll, true);
        window.scrollTo(0, 0);
      } else {
        document.querySelector('.pcoded-navbar').classList.add('menupos-static');
        document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');
        if (this.nextConfig.layout === 'vertical') {
          (document.querySelector('#nav-ps-next') as HTMLElement).style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
        }
        if (this.nextConfig.layout === 'vertical') {
          window.removeEventListener('scroll', this.scroll, true);
        }

      }
    }, 100);
  }

  setHeaderFixedLayout(e) {
    const flag = !!(e.target.checked);
    this.changeHeaderFixedLayout(flag);
  }

  changeHeaderFixedLayout(flag) {
    if (flag) {
      document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
    } else {
      document.querySelector('.pcoded-header').classList.remove('headerpos-fixed');
      // static
      if (this.nextConfig.layout === 'vertical' && this.menuFixedLayout) {
        window.addEventListener('scroll', this.scroll, true);
        window.scrollTo(0, 0);
      } else {
        window.removeEventListener('scroll', this.scroll, true);
      }
    }
  }

  setBoxLayout(e) {
    const flag = !!(e.target.checked);
    this.changeBoxLayout(flag);
  }

  changeBoxLayout(flag) {
    if (flag) {
      document.querySelector('body').classList.add('container');
      document.querySelector('body').classList.add('box-layout');
    } else {
      document.querySelector('body').classList.remove('box-layout');
      document.querySelector('body').classList.remove('container');
    }
  }

  setHeaderBackground(background) {
    this.headerBackgroundColor = background;
    this.nextConfig.headerBackColor = background;
    document.querySelector('.pcoded-header').classList.remove('header-blue');
    document.querySelector('.pcoded-header').classList.remove('header-red');
    document.querySelector('.pcoded-header').classList.remove('header-purple');
    document.querySelector('.pcoded-header').classList.remove('header-info');
    document.querySelector('.pcoded-header').classList.remove('header-dark');

    if (background !== 'header-default') {
      document.querySelector('.pcoded-header').classList.add(background);
    }
  }

  setBrandBackground(background) {
    this.brandBackgroundColor = background;
    this.nextConfig.navBrandColor = background;
    document.querySelector('.pcoded-header').classList.remove('brand-blue');
    document.querySelector('.pcoded-header').classList.remove('brand-red');
    document.querySelector('.pcoded-header').classList.remove('brand-purple');
    document.querySelector('.pcoded-header').classList.remove('brand-info');
    document.querySelector('.pcoded-header').classList.remove('brand-dark');
    document.querySelector('.pcoded-header').classList.remove('brand-default');
    document.querySelector('.pcoded-header').classList.add(background);
  }

}
