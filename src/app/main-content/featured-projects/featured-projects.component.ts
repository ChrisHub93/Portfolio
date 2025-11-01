import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
  imports: [NgClass],
})
export class FeaturedProjectsComponent  {

  showJoinImg = false;
  showPolloImg = false;
  showBubbleImg = false;
}
