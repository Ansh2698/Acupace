// import { Http} from '@angular/http'; 

import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Headers, RequestOptions } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
// import { AlertController } from 'ionic-angular';
// import { FileChooser } from '@ionic-native/file-chooser';

// import {
//   ActionSheetController,
//   ToastController, Platform,
//   LoadingController, Loading, Events, ModalController
// } from 'ionic-angular';


//  import { Transfer, TransferObject } from '@ionic-native/file-transfer';    

// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';

// import { FilePath } from '@ionic-native/file-path';

// import { Camera, CameraOptions } from '@ionic-native/camera';
import { map } from 'rxjs/operator/map';




// declare var cordova: any;

//  let headers = new Headers();
//   headers.append('Access-Control-Allow-Origin' , '*');
//   headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
//   headers.append('Accept','application/json');
//   headers.append('content-type','application/json'); 

@Injectable()
export class WebServiceService { 


  lastImage: string = null;
  docParams: any;
  data: any;
  imageBaseURL: any = '';
  api: any = 'http://acupace.co.in'; 
  apiUrlv1: any = this.api + '/videoconfwebservice/';    
  loader: any;
  accessToken: any;
  filepath: any;
  actionSheet: any;
  filesize: any;
  options: any;
  headers;



  constructor(
    public http: HttpClient,
    // public loading: LoadingController,
    // public toastCtrl: ToastController,
    // public platform: Platform,
    // public events: Events,
    // private alertCtrl: AlertController,
    // public modalCtrl: ModalController,
    // private camera: Camera, private transfer: FileTransfer,
    // private file: File, private filePath: FilePath,
    // public actionSheetCtrl: ActionSheetController,
    // private fileChooser: FileChooser
  ) {
    console.log('Hello WebserviceProvider Provider');
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Authorization');
  }



  // protected headers { 
  // let httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',  
  //   // 'Access-Control-Allow-Origin': '* ', 
  //    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
  //     'Accept':'application/json',
  //   //  'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,Origin,Accept,Access-Control-Allow-Headers,Access-Control-Allow-Methods,Access-Control-Allow-Origin'

  //   });

  // let options = {
  //   headers: httpHeaders
  // };
  // return options;
  // }





  public login_user_get(bodystring) {

    // this.datafetch();

    return new Promise(resolve => {
      this.http.post(this.apiUrlv1 + 'login.php', bodystring, this.headers)
        .subscribe(data => {
          console.log('login data', JSON.stringify(data));
          this.data = data;
          localStorage.setItem("currentUser",JSON.stringify(data));
          resolve(this.data);
          // this.loader.dismissAll();
        }, (err) => {
          console.log(JSON.stringify(err));
          // this.loader.dismissAll();
          // this.showAlert(JSON.stringify(err));

        });
    });
  }
  // Logout the User
  public Logout_user(){
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userDetails");
  }
  public UserRegister(bodystring) {

    // this.datafetch();

    // this.options = new RequestOptions({ headers: headers });    


    return new Promise(resolve => {

      this.http.post(this.apiUrlv1 + 'registration.php', bodystring, this.headers)
        //  .map(res => res.json())
        .subscribe(data => {
        //   this.loader.dismissAll();
          this.data = data;
          console.log(JSON.stringify(data));
          resolve(this.data);
        }, (err) => {
          console.log(err);
          this.loader.dismissAll();
          if (400) {
            resolve(err);
            console.log(err);
            // this.showAlert("Ooops!! Some problem is there.");
            // this.loader.dismissAll();
          }
          else {
              console.log("Success full");
            // this.showAlert("Ooops!! Some problem is there.");
            // this.loader.dismissAll();
          }
        });
    });

  }

  public AddInvitation(bodystring) {
    return new Promise(resolve => {

      this.http.post(this.apiUrlv1 + 'add_invitation_details.php', bodystring, this.headers)
        //  .map(res => res.json())
        .subscribe(data => {
          //   this.loader.dismissAll();
          this.data = data;
          console.log(JSON.stringify(data));
          resolve(this.data);
        }, (err) => {
          console.log(err);
          this.loader.dismissAll();
          if (400) {
            resolve(err);
            console.log(err);
            // this.showAlert("Ooops!! Some problem is there.");
            // this.loader.dismissAll();
          }
          else {
            console.log("Invitation sent Sucessfully on the mail of attendee");
            // this.showAlert("Ooops!! Some problem is there.");
            // this.loader.dismissAll();
          }
        });
    });
  }

  public NotificationList(bodystring) {

    // this.datafetch();
    // this.options = new RequestOptions({ headers: headers });    

    return new Promise(resolve => {
      this.http.post(this.apiUrlv1 + 'invitation_notificationlist.php', bodystring, this.headers)
        //  .map(res => res.json()) 
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          // this.loader.dismissAll();
        }, (err) => {
          console.log(err);
          // this.loader.dismissAll();
          if (400) {
            resolve(err);
            console.log(err);
            // this.showAlert("Ooops!! Some problem is there.");
            // this.loader.dismissAll();
          }
          else {
            console.log("OOps! some problem is there");
            // this.showAlert("Ooops!! Some problem is there.");
            // this.loader.dismissAll();
          }
        });

    });

  }
  public Update_meeting(bodystring) {

    // this.datafetch();
    // this.options = new RequestOptions({ headers: headers });    

    return new Promise(resolve => {
      this.http.post(this.apiUrlv1 + 'update_meeting_status.php', bodystring, this.headers)
        //  .map(res => res.json()) 
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          // this.loader.dismissAll();
        }, (err) => {
          console.log(err);
          // this.loader.dismissAll();
          if (400) {
            resolve(err);
            console.log(err);
            // this.showAlert("Ooops!! Some problem is there.");
            // this.loader.dismissAll();
          }
          else {
            console.log("OOps! some problem is there");
            // this.showAlert("Ooops!! Some problem is there.");
            // this.loader.dismissAll();
          }
        });

    });

  }


//   public SendOTP(bodystring) {

//     this.datafetch();
//     // this.options = new RequestOptions({ headers: headers });  
//     return new Promise(resolve => {
//       this.http.post(this.apiUrlv1 + 'sendotp.php', bodystring, this.headers)
//         //  .map(res => res.json())
//         .subscribe(data => {
//           this.loader.dismissAll();

//           this.data = data;
//           console.log(JSON.stringify(data));
//           resolve(this.data);
//         }, (err) => {
//           console.log(err);
//           if (400) {
//             resolve(err);
//             this.showAlert("Ooops!! Some problem is there.");
//           }
//           else {
//             this.showAlert("Ooops!! Some problem is there.");
//           }

//         });
//     });
//   }


//   public verifyOtp(bodystring) {

//     this.datafetch();
//     // this.options = new RequestOptions({ headers: headers });    

//     return new Promise(resolve => {
//       this.http.post(this.apiUrlv1 + 'verifyotp.php', bodystring, this.headers)
//         //  .map(res => res.json())
//         .subscribe(data => {
//           this.loader.dismissAll();

//           this.data = data;
//           console.log(JSON.stringify(data));
//           resolve(this.data);
//         }, (err) => {
//           console.log(err);
//           if (400) {
//             resolve(err);
//             this.showAlert("Ooops!! Some problem is there.");
//           }
//           else {
//             this.showAlert("Ooops!! Some problem is there.");
//           }

//         });
//     });
//   }




//   getuserProfile(bodystring) {

//     // this.options = new RequestOptions({ headers: headers });  
//     return new Promise(resolve => {
//       this.http.post(this.apiUrlv1 + 'myprofile.php', bodystring, this.headers)
//         //  .map(res => res.json())
//         .subscribe(data => {
//           this.data = data;
//           console.log(JSON.stringify(data));
//           resolve(this.data);
//         }, (err) => {
//           console.log(err);
//           if (400) {
//             resolve(err);
//             this.showAlert("Ooops!! Some problem is there.");
//           }
//           else {
//             this.showAlert("Ooops!! Some problem is there.");
//           }

//         });
//     });
//   }

//   public updateuserProfile(bodystring) {

//     // this.options = new RequestOptions({ headers: headers });    


//     return new Promise(resolve => {

//       this.http.post(this.apiUrlv1 + 'update_user.php', bodystring, this.headers)
//         //  .map(res => res.json())
//         .subscribe(data => {
//           this.data = data;
//           console.log(JSON.stringify(data));
//           resolve(this.data);
//         }, (err) => {
//           console.log(err);
//           if (400) {
//             resolve(err);
//             this.showAlert("Ooops!! Some problem is there.");
//           }
//           else {
//             this.showAlert("Ooops!! Some problem is there.");
//           }

//         });
//     });
//   }

//   public CreateCustomer(bodystring) {

//     this.datafetch();
//     // this.options = new RequestOptions({ headers: headers });    

//     return new Promise(resolve => {
//       this.http.post(this.apiUrlv1 + 'addcustomer.php', bodystring, this.headers)
//         //  .map(res => res.json())
//         .subscribe(data => {
//           this.loader.dismissAll();
//           this.data = data;
//           console.log(JSON.stringify(data));
//           resolve(this.data);
//         }, (err) => {
//           console.log(err);
//           if (400) {
//             resolve(err);
//             this.showAlert("Ooops!! Some problem is there.");
//           }
//           else {
//             this.showAlert("Ooops!! Some problem is there.");
//           }

//         });
//     });
//   }


  //////////////////////////////////////////////////
//   showAlert(msg) {
//     let alert = this.alertCtrl.create({
//       title: 'GPIXELS APP',
//       subTitle: msg,
//       buttons: ['OK']
//     });
//     alert.present();
//   }



//   datafetch() {
//     this.loader = this.loading.create({
//       content: 'Please wait....'
//     });
//     this.loader.present();
//   }


//   Timeoutdatafetch() {
//     this.loader = this.loading.create({
//       content: 'Updating all Information...'
//     });
//     this.loader.present();
//   }




//   public sendEmail(username, finalAddress, CurrentID, LastInsertedDate) {

//     //  this.datafetch();  

//     // this.options = new RequestOptions({ headers: headers });    




//     return new Promise(resolve => {

//       this.http.get('http://acupace.co.in/sendmail.php?username=' + username + '&address=' + finalAddress + '&CurrentID=' + CurrentID + '&LastInsertedDate=' + LastInsertedDate, this.options)
//         .map(res => res)
//         .subscribe(data => {
//           this.data = data;
//           resolve(this.data);

//           // this.loader.dismissAll();

//         }, (err) => {
//           console.log(err);
//           this.loader.dismissAll();
//           if (400) {
//             resolve(err);
//             this.showAlert("Ooops!! Some problem is there.");
//             // this.loader.dismissAll();
//           }
//           else {
//             this.showAlert("Ooops!! Some problem is there.");
//             //  this.loader.dismissAll();
//           }
//         });
//     });
//   }


//   /////////////// Upload Documents //////

//   public presentActionSheet(docParams, type) {

//     if (type == 'mybooking') {

//       this.actionSheet = this.actionSheetCtrl.create({
//         title: 'Select Image Source',
//         buttons: [
//           {
//             text: 'Use Camera',
//             handler: () => {
//               this.takePicture(this.camera.PictureSourceType.CAMERA, docParams);
//             }
//           },
//           {
//             text: 'Cancel',
//             role: 'cancel'
//           }
//         ]
//       });
//     }

//     else {

//       this.actionSheet = this.actionSheetCtrl.create({
//         title: 'Select Image Source',
//         buttons: [
//           {
//             text: 'Load from Library',
//             handler: () => {
//               this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, docParams);
//             }
//           },
//           {
//             text: 'Use Camera',
//             handler: () => {
//               this.takePicture(this.camera.PictureSourceType.CAMERA, docParams);
//             }
//           },
//           {
//             text: 'Cancel',
//             role: 'cancel'
//           }
//         ]
//       });

//     }


//     this.actionSheet.present();
//   }



//   public takePicture(sourceType, docParams) {
//     // Create options for the Camera Dialog
//     var options = {
//       quality: 100,
//       sourceType: sourceType,
//       saveToPhotoAlbum: false,
//       correctOrientation: true
//     };

//     // Get the data of an image
//     this.camera.getPicture(options).then((imagePath) => {
//       // Special handling for Android library
//       if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
//         this.filePath.resolveNativePath(imagePath)
//           .then(filePath => {
//             let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
//             let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
//             this.copyFileToLocalDir(correctPath, currentName, this.createFileName(), docParams);
//           });
//       } else {
//         var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
//         var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
//         this.copyFileToLocalDir(correctPath, currentName, this.createFileName(), docParams);
//       }
//     }, (err) => {
//       this.presentToast('Error while selecting image.');
//     });
//   }


//   public uploadImage(docParams, events) {

//     this.docParams = docParams;

//     // Destination URL
//     var url = this.apiUrlv1 + "upload.php";

//     // File for Upload
//     var targetPath = this.pathForImage(this.lastImage);

//     // File name only
//     var filename = this.lastImage;

//     let category: string = (<any>this).docParams.category;
//     let userId: string = (<any>this).docParams.userId;


//     var options = {
//       fileKey: "file",
//       fileName: filename,
//       chunkedMode: false,
//       mimeType: "multipart/form-data",
//       params: { 'category': category, 'userId': userId }
//     };


//     console.log('options' + JSON.stringify(options));

//     const fileTransfer: FileTransferObject = this.transfer.create();

//     this.datafetch();

//     // Use the FileTransfer to upload the image
//     fileTransfer.upload(targetPath, url, options).then(data => {
//       this.loader.dismissAll();
//       this.presentToast('Document succesful uploaded.');

//       let res = data.response;
//       console.log('data.response' + res);


//       let docName = JSON.parse(res).docName;
//       let category = JSON.parse(res).category;

//       console.log('docName1' + docName);
//       console.log('category1' + category);
//       this.events.publish(this.docParams.event, docName, category);
//     }, err => {
//       this.loader.dismissAll();
//       this.presentToast('Error while uploading file.');
//       console.info("err.http_status: " + (err.http_status));
//     });

//   }

//   // Create a new name for the image
//   private createFileName() {
//     var d = new Date(),
//       n = d.getTime(),
//       newFileName = n + ".jpg";
//     return newFileName;
//   }

//   // Copy the image to a local folder
//   private copyFileToLocalDir(namePath, currentName, newFileName, docParams) {
//     this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
//       this.lastImage = newFileName;

//       console.log('docParams' + JSON.stringify(docParams));

//       this.uploadImage(docParams, this.events);

//     }, error => {
//       this.presentToast('Error while storing file.');
//     });
//   }

//   public presentToast(text) {
//     let toast = this.toastCtrl.create({
//       message: text,
//       duration: 6000,
//       position: 'top'
//     });
//     toast.present();
//   }

//   // Always get the accurate path to your apps folder
//   public pathForImage(img) {
//     if (img === null) {
//       return '';
//     } else {
//       return cordova.file.dataDirectory + img;
//     }
//   }


   public forgotPassword(bodystring) {
     // this.datafetch();
     // this.options = new RequestOptions({ headers: headers });  
     return new Promise(resolve => {
       this.http.post(this.apiUrlv1 + 'forgotpassw.php', bodystring, this.headers)
         //  .map(res => res.json())
         .subscribe(data => {
           this.data = data;
           resolve(this.data);
          // this.loader.dismissAll();
         }, (err) => {
           console.log(err);
           this.loader.dismissAll();
           if (400) {
             resolve(err);
             console.log(err);
            // this.showAlert("Ooops!! Some problem is there.");
            // this.loader.dismissAll();
           }
           else {
             console.log("link sent successfully");
            // this.showAlert("Ooops!! Some problem is there.");
            // this.loader.dismissAll();
           }
         });
     });
   }

}
