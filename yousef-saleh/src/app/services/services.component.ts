import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  @Input() serviceDetail = false;
  serviceCardData = [
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
    {
      heading: 'Quasi eaque omnis',
      subHeading:
        'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autemodit voluptas quos commodi magnam occaecati.',
    },
  ];
}
