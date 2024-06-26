import { Component } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../../model/article";

@Component({
  selector: 'app-subscription-content',
  templateUrl: './subscription-content.component.html',
  styleUrls: ['./subscription-content.component.css']
})
export class SubscriptionContentComponent {
  articles: Article[] = [];
  id: number=0;
  subscriptions = [
    {
      image: 'https://media.discordapp.net/attachments/1014323196859781182/1169158205033685052/free.png?ex=6554626d&is=6541ed6d&hm=a5d8de822931ba4152c1ce129c7e58280c68aef32cccb35bba6b8bcce726def0&=&width=1118&height=671',
      name: 'Free Plan',
      price: '0.00',
      description: 'The Free plan is perfect for those who want to try our services for free. With this plan, you\'ll get basic access to our essential features at no cost. Start exploring and discover what we have to offer without obligation!',
      hasButtons: false,
      numberPlan: 0
    },
    {
      image: 'https://media.discordapp.net/attachments/1014323196859781182/1169158202563239976/basic.png?ex=6554626d&is=6541ed6d&hm=81199692d6611d6294eeaeeb25b3156c875b275a38f6793c495fb16ae0e7308e&=&width=1118&height=671',
      name: 'Basic Plan',
      price: '9.99',
      description: 'Our Basic plan is an excellent option for those looking for a more complete experience. With access to additional features and exclusive content, the Basic plan gives you the opportunity to make the most of our services at an affordable price.',
      hasButtons: true,
      numberPlan: 1
    },
    {
      image: 'https://media.discordapp.net/attachments/1014323196859781182/1169158209223790612/prime.png?ex=6554626e&is=6541ed6e&hm=61b3901a8abf51b57507fbacaeb1a533b9e44f2d28cdec7f28c0bb6b22841b59&=&width=1118&height=671',
      name: 'Premium Plan',
      price: '19.99',
      description: 'The Prime plan is the top tier of our subscriptions. With full access to all premium features, exclusive content, and additional benefits, the Prime plan is perfect for those who want a premium, personalized experience with us. Enjoy all the advantages we have reserved for you.',
      hasButtons: true,
      numberPlan: 2
}
  ];
  constructor(private articleService: ArticleService,
              private router: Router,
              private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }
  ngOnInit(): void {
    this.chargeList();
  }
  chargeList(): void {
    this.articleService.list().subscribe(
      data => {
        this.articles = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  selectPlan(planId: number): void {

    this.router.navigate(['/detail', planId],{ queryParams: { id: this.id } });
  }
}
