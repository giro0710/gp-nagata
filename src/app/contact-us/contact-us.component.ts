import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  @ViewChild("mapRef", { static: true }) mapElement: ElementRef;
  // emailForm: FormGroup
  emailForm = new FormGroup({
    inputEmail: new FormControl(""),
    inputName: new FormControl(""),
    inputSubject: new FormControl(""),
    inputMessage: new FormControl(""),
  });
  submitted = false;

  emailData = {
    email: "",
    name: "",
    subject: "",
    message: "",
  };
  mailerUrl = "https://gpdigital-mailer.herokuapp.com/gpnagata.php";

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.renderMap();
    this.emailForm = this.formBuilder.group({
      inputEmail: ["", [Validators.required, Validators.email]],
      inputName: ["", Validators.required],
      inputSubject: ["", Validators.required],
      inputMessage: ["", [Validators.required, Validators.minLength(12)]],
    });
  }

  get formData() {
    return this.emailForm.controls;
  }

  onSubmitEmail() {
    this.submitted = true;

    if (this.emailForm.invalid) {
      return;
    }

    this.emailData = {
      email: this.emailForm.value.inputEmail,
      name: this.emailForm.value.inputName,
      subject: this.emailForm.value.inputSubject,
      message: this.emailForm.value.inputMessage,
    };

    this.http
      .post(this.mailerUrl, this.emailData)
      .toPromise()
      .then((data) => {
        this.submitted = false;
        console.log(data);
      });
  }

  loadMap = () => {
    var map = new window["google"].maps.Map(this.mapElement.nativeElement, {
      center: { lat: 14.629918, lng: 121.02769 },
      zoom: 15,
    });

    var marker = new window["google"].maps.Marker({
      position: { lat: 14.629918, lng: 121.02769 },
      map: map,
      title: "GP-Nagata Inc.",
      draggable: true,
      animation: window["google"].maps.Animation.DROP,
    });

    var contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h3 id="thirdHeading" class="thirdHeading">GP-Nagata Inc.</h3>' +
      '<div id="bodyContent">' +
      "<p>74 Don A Roces Ave. Cor. Sct. Santiago St. Brgy. Obrero Diliman Quezon City</p>" +
      "</div>" +
      "</div>";

    var infowindow = new window["google"].maps.InfoWindow({
      content: contentString,
    });

    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
  };

  renderMap() {
    window["initMap"] = () => {
      this.loadMap();
    };
    if (!window.document.getElementById("google-map-script")) {
      var s = window.document.createElement("script");
      s.id = "google-map-script";
      s.type = "text/javascript";
      s.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAppPFcfzyJyLxd4h__Hi-dpG50oCXuc0w&amp;callback=initMap";

      window.document.body.appendChild(s);
    } else {
      this.loadMap();
    }
  }
}
