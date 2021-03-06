import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';

@Component({
  selector: 'store-api-console',
  templateUrl: './api-console.component.html',
  styleUrls: ['./api-console.component.scss']
})
export class ApiConsoleComponent implements OnInit, AfterViewInit {
  @ViewChild('swagger') container: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const ui = SwaggerUIBundle({
      url: 'assets/files/swagger.json',
      domNode: this.container.nativeElement.querySelector('.swagger-container'),
      deepLinking: true,
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl,
        () => {
          return {
            components: {
              Topbar: () => null,
              Info: () => null
            }
          };
        }
      ],
      docExpansion: 'list',
      jsonEditor: false,
      defaultModelRendering: 'schema',
      showRequestHeaders: true,
      layout: 'StandaloneLayout'
    });
  }
}
