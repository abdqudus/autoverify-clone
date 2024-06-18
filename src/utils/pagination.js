export const DEFAULT_LIMIT = 20;

class Pager {
  forceReloadUseState;

  constructor(pageUseState, paginator) {
    this.page = pageUseState.page;
    this.setPage = pageUseState.setPage;
    this.pageUseState = pageUseState;
    this.paginator = paginator;
  }

  next() {
    const { page, setPage } = this.pageUseState;
    if (page < this.paginator.no_pages - 1) {
      setPage(page + 1);
      console.log("current page=" + (page + 1));
    } else {
      console.log("already at last page");
    }
  }

  previous() {
    const { page, setPage } = this.pageUseState;
    if (page >= 1) {
      setPage(page - 1);
      console.log("current page=" + (page + 1));
    } else {
      console.log("already at first page");
    }
  }

  firstPage(){
    const { setPage } = this.pageUseState;
    setPage(0);
  }

  lastPage(){
    const { setPage } = this.pageUseState;
    setPage(this.paginator.no_pages);
  }

  refresh() {
    // const { setPage, page } = this.pageUseState;
    // setPage((page) => page);
    if (this.forceReloadUseState) {
      const [forceReload, setForceReload] = this.forceReloadUseState;
      setForceReload(forceReload + 1); // just increment it
    }
  }
}

export class Paginator {
  count = null;
  no_pages = null;
  _next_url = "";
  _previous_url = "";

  constructor(endpoint, pageUseState, reverseWhat, toReverse) {
    this.endpoint = endpoint;
    this.limit = Number(getLimit());
    this.offset = pageUseState.page;
    this.pager = new Pager(pageUseState, this);
    this.toReverse = true;
    this.reverseWhat = reverseWhat || "date_created";
  }

  async next() {
    this.offset = clamp((this.offset || 0) + 1, 0, this.no_pages - 1);
    return this._update(
      await this._get_list(this.limit, this.offset * this.limit)
    );
  }

  async previous() {
    this.offset = clamp((this.offset || 0) - 1, 0, this.no_pages - 1);
    return this._update(
      await this._get_list(this.limit, this.offset * this.limit)
    );
  }

  async current() {
    return this._update(
      await this._get_list(this.limit, (this.offset || 0) * this.limit)
    );
  }

  async _get_list(limit, offset) {
    return await this.endpoint.list(
      limit,
      offset,
      this.reverseWhat,
      this.toReverse
    );
  }

  async first() {
    return this._update(await this._get_list(this.limit, 0));
  }

  async last() {
    return this._update(await this._get_list(this.limit, this.no_pages));
  }

  _update(res) {
    this.count = Number(res.count);
    this.no_pages = Math.ceil(this.count / this.limit);
    this._next_url = res.next;
    this._previous_url = res.previous;
    return res;
  }

  hasNext() {
    return this._next_url !== null;
  }

  hasPrevious() {
    return this._previous_url !== null;
  }
}

export function setLimit(limit) {
  limit = Number(limit || DEFAULT_LIMIT);
  if (!Number.isNaN(limit)) {
    localStorage.setItem("limit", limit);
  }
}

export function getLimit(default_value) {
  const current_limit = localStorage.getItem("limit");
  if (!current_limit) {
    localStorage.setItem("limit", default_value || DEFAULT_LIMIT);
  }
  return localStorage.getItem("limit");
}

function clamp(value, min, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}
