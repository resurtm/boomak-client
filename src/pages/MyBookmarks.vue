<template>
  <div>
    <h1>My Bookmarks</h1>

    <table class="table table-sm table-bordered my-4">
      <thead>
      <tr>
        <th scope="col">URL</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="bookmark in bookmarks" :key="bookmark.id">
        <td scope="row">
          <a :href="bookmark.url">{{bookmark.url}}</a>
        </td>
        <td>
          <a href="#">Change</a> | <a href="#">Delete</a>
        </td>
      </tr>
      </tbody>
    </table>

    <nav aria-label="My Bookmarks Navigation" class="my-4">
      <paginate
          :page-count="totalCount"
          :page-range="2"
          :margin-pages="2"
          :click-handler="pageClick"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination justify-content-center'"
          :prev-class="'page-item'"
          :page-class="'page-item'"
          :next-class="'page-item'"
          :prev-link-class="'page-link'"
          :page-link-class="'page-link'"
          :next-link-class="'page-link'">
      </paginate>
    </nav>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {pick, clone} from 'lodash'
  import {FETCH_BOOKMARKS} from '../store/bookmarks'
  import Paginate from 'vuejs-paginate'

  const PAGE_SIZE = 10;

  export default {
    name: 'my-bookmarks-page',

    components: {
      Paginate,
    },

    data: () => ({
      totalCount: 0,
      bookmarks: [],
    }),

    mounted() {
      this[FETCH_BOOKMARKS]({offset: 0, limit: PAGE_SIZE}).then(({count, bookmarks}) => {
        this.totalCount = Math.ceil(count / PAGE_SIZE);
        this.bookmarks = bookmarks;
      });
    },

    methods: {
      pageClick(pageNum) {
        this[FETCH_BOOKMARKS]({offset: (pageNum - 1) * PAGE_SIZE, limit: PAGE_SIZE}).then(({count, bookmarks}) => {
          this.totalCount = Math.ceil(count / PAGE_SIZE);
          this.bookmarks = bookmarks;
        });
      },

      ...mapActions([FETCH_BOOKMARKS]),
    },
  }
</script>
