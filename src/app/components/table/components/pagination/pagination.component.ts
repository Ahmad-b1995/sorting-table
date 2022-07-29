import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() length?: number = 0
  @Input() pageSize?: number = 1
  @Output() page: EventEmitter<number> = new EventEmitter()
  public activePage: number = 1

  public prevPage() {
    this.page.emit(this.activePage-1)
    this.activePage--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  public nextPage() {
    this.page.emit(this.activePage+1)
    this.activePage++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  public goToPage(page: number) {
    this.page.emit(page)
    this.activePage = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
