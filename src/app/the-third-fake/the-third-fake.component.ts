import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-the-third-fake',
  templateUrl: './the-third-fake.component.html',
  styleUrls: ['./the-third-fake.component.css'],
})
export class TheThirdFakeComponent implements OnInit {
  // Inputs
  @Input() iAdmin: any;

  // 1. User is admin and may edit content
  isAdmin: boolean;

  // 2. Toggles for editing UI
  editToggle: boolean;
  // editToggleArr: String[];

  // 3. Content Variables
  imageUrl?: string;
  textArr?: string[];

  // 4. CMS Type Definition
  cmsType: number; // 0 = Empty, 1 = Image, 2 = Text, 3 = ...etc
  cmsClassDisplay: string[];

  constructor() {
    // 1. User is admin
    this.isAdmin = false;

    // 2. Toggles for editing UI
    this.editToggle = false;

    // 3. Content Variables
    this.imageUrl =
      'https://res.cloudinary.com/carlhernek/image/upload/v1594818036/SAR-demo/Restaurants/orlova-maria-oMTlhdFUhdI-unsplash_tfbudv.jpg';
    this.textArr = [
      'Flexitarian air plant readymade williamsburg photo booth biodiesel lomo pork belly knausgaard actually. IPhone hell of iceland, direct trade church-key kombucha polaroid blog fanny pack franzen street art bicycle rights. Butcher tilde 8-bit flexitarian deep v tote bag, cardigan brooklyn messenger bag. Pug viral portland activated charcoal vape. Pork belly scenester glossier quinoa man bun austin salvia umami tilde 3 wolf moon forage kinfolk. Drinking vinegar tumblr slow-carb kale chips fanny pack.',
      'Yr mustache hoodie austin. Craft beer chicharrones echo park glossier squid fingerstache banjo copper mug neutra slow-carb iceland. Cliche heirloom waistcoat, coloring book man braid la croix actually. 90s chartreuse pour-over freegan cold-pressed kogi la croix shaman pitchfork authentic lomo bicycle rights asymmetrical migas. Street art plaid kombucha, tattooed man bun hoodie humblebrag pabst prism cloud bread hella chia. Celiac selfies sustainable gastropub irony green juice tote bag occupy, iceland put a bird on it prism.',
    ];

    // 4. CMS Type Definition & Classes
    this.cmsType = 1;
    this.cmsClassDisplay = ['cms-hide', 'cms-hide', 'cms-hide'];
  }

  editButton = () => {
    if (this.editToggle) {
      this.editToggle = false;
    } else {
      this.editToggle = true;
    }
  };

  setAdmin = (auth: string) => {
    if (auth === 'true') {
      console.log('yay');
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  };

  setCmsType = (type: number) => {
    for (var i = 0; i < this.cmsClassDisplay.length; i++) {
      this.cmsClassDisplay[i] = 'cms-hide';
      if (type !== 0 && i === type) {
        this.cmsClassDisplay[type] = 'cms-show';
      }
    }
    this.cmsType = type;
    this.editToggle = false;
  };

  ngOnInit(): void {
    this.setAdmin(this.iAdmin);
    this.setCmsType(this.cmsType);
  }
}
