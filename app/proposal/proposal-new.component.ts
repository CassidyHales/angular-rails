import { Proposal } from './proposal';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'proposal-new',
  templateUrl: 'proposal-new.component.html',
  styleUrls: ['proposal-new.component.css']
})
export class ProposalNewComponent {
  proposal = new Proposal;
}