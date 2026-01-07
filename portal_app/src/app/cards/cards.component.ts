import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
 API = [
    {
      id: 1,
      title: 'Notifications API',
      description: 'API designed to manage and deliver event-based notifications to external partners and systems through secure webhooks.',
      tags: ['Notifications', 'Webhooks', 'Events','Security'],
      status: 'Active',
      rating: 0
    },
    {
      id: 2,
      title: 'Notifications API',
      description: 'API designed to manage and deliver event-based notifications to external partners and systems through secure webhooks.',
      tags: ['Notifications', 'Webhooks', 'Events','Security'],
      status: 'Active',
      rating: 4.0
    },
    {
      id: 3,
      title: 'Notifications API',
      description: 'API designed to manage and deliver event-based notifications to external partners and systems through secure webhooks.',
      tags: ['Notifications', 'Webhooks', 'Events','Security'],
      status: 'obsolete',
      rating: 3.5
    },
    {
      id: 4,
      title: 'Notifications API',
      description: 'API designed to manage and deliver event-based notifications to external partners and systems through secure webhooks.',
      tags: ['Notifications', 'Webhooks', 'Events','Security'],
      status: 'beta',
      rating: 4.2
    },
    {
      id: 5,
      title: 'Notifications API',
      description: 'API designed to manage and deliver event-based notifications to external partners and systems through secure webhooks.',
      tags: ['Notifications', 'Webhooks', 'Events','Security'],
      status: 'obsolete',
      rating: 2.8
    },
    {
      id: 6,
      title: 'Notifications API',
      description: 'API designed to manage and deliver event-based notifications to external partners and systems through secure webhooks.',
      tags: ['Notifications', 'Webhooks', 'Events','Security'],
      status: 'Active',
      rating: 1.7
    }

  ]

   
}
