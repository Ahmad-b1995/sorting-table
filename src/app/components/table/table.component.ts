import { User } from './../../models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() pageSize: number = 2
  public users?: User[]
  public tempUsers?: User[]
  public order: { [key: string]: boolean | null } = {
    "id": null,
    "email": null,
    "first_name": null,
    "last_name": null,
  }
  @Input() set allUsers(users: User[] | undefined) {
    this.users = users
    this.chunkUsers()
  }


  private sort() {
    Object.keys(this.order).forEach(item => {
      if (this.order[item] === true || this.order[item] === false) {
        if (item == 'id') {
          this.sortById(true)
        } else this.sortAlphabetically(item, true)
      }
    })
  }

  public sortById(noToggle?: boolean) {
    if (!this.tempUsers?.length) return
    if (noToggle) {
      if (this.order.id) {
        return this.tempUsers = this.tempUsers.sort((a, b) => a.id - b.id);
      } else {
        return this.tempUsers = this.tempUsers.sort((a, b) => b.id - a.id);
      }
    }
    if (this.order.id) {
      this.tempUsers = this.tempUsers.sort((a, b) => b.id - a.id);
    } else {
      this.tempUsers = this.tempUsers.sort((a, b) => a.id - b.id);
    }
    return this.toggleOrder('id')
  }


  public sortAlphabetically(by: string, noToggle?: boolean) {
    if (!this.tempUsers?.length) return
    if (noToggle) {
      if (this.order[by]) {
        return this.tempUsers = this.tempUsers.sort((a, b) => a[by].localeCompare(b[by]));
      } else {
        return this.tempUsers = this.tempUsers.sort((a, b) => b[by].localeCompare(a[by]));
      }
    }
    if (this.order[by]) {
      this.tempUsers = this.tempUsers.sort((a, b) => b[by].localeCompare(a[by]));
    } else {
      this.tempUsers = this.tempUsers.sort((a, b) => a[by].localeCompare(b[by]));
    }
    return this.toggleOrder(by)
  }

  private toggleOrder(exclude: string) {
    if (this.order[exclude] != null) {
      this.order[exclude] = !this.order[exclude]
    } else {
      this.order[exclude] = true
    }
    Object.keys(this.order).forEach(item => {
      if (item == exclude) return
      this.order[item] = null
    })
  }

  goToPage(page: number) {
    this.chunkUsers(page)
    this.sort()
  }

  chunkUsers(page?: number) {
    const sliceStart = (page) ? (page - 1) * this.pageSize : 0
    const sliceEnd = this.pageSize * ((page) ? page! : 1)
    this.tempUsers = this.users?.slice(sliceStart, sliceEnd)
  }


}

