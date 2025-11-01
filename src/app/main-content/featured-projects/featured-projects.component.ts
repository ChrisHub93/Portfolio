import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
  imports: [],
})
export class FeaturedProjectsComponent  {
  ngAfterViewInit(): void {
    const projects = document.querySelectorAll<HTMLElement>('.project');
    const previewImages =
      document.querySelectorAll<HTMLImageElement>('.preview-img');

    projects.forEach((project) => {
      project.addEventListener('mouseenter', () => {
        const imgId = project.dataset['img'];

        previewImages.forEach((img) => {
          img.style.display = 'none';
        });

        if (imgId) {
          const targetImg = document.getElementById(
            imgId
          ) as HTMLImageElement | null;
          if (targetImg) targetImg.style.display = 'block';
        }
      });

      project.addEventListener('mouseleave', () => {
        const imgId = project.dataset['img'];
        if (imgId) {
          const targetImg = document.getElementById(
            imgId
          ) as HTMLImageElement | null;
          if (targetImg) targetImg.style.display = 'none';
        }
      });
    });
  }
}
