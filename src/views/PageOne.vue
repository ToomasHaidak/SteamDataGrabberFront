<template>
  <div class="home">
    <div>
      <input placeholder="Ridu lehel" v-model="rowsPerPage" id="pageCount">
      <input placeholder="Alates reast" v-model="pageNumber" id="pageNumber">
    </div>
    <br>
    <button v-on:click="getAllVrGameData()">Otsi</button>
    <br>

    <br>
    <button v-on:click="updateGameData()">Update</button>
    <br>


    <br>
    <div class="select">
      <select v-model="select" class="from-select">
<!--        <option>Select</option>-->
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
    <div class="columnname">
      <select v-model="columnName" class="from-columnname">
<!--        <option>Select</option>-->
        <option value="vrgame.id">GameId</option>
        <option value="game_name">GameName</option>
        <option value="current_price">CurrentPrice</option>
        <option value="metascore">Metascore</option>
        <option value="current_discounted_price">DiscountPrice</option>
        <option value="all_reviews">AllReviews</option>
        <option value="positive_reviews">PosReviews</option>
        <option value="release_date">ReleaseDate</option>
      </select>
    </div>
    <br>
    <div id="vrgametabel">
      <table v-show="fulltable.length > 0">
        <table>
          <tr>
            <th>Id</th>
            <th>Game</th>
            <th>CurrentPrice</th>
            <th>Metascore</th>
            <th>DiscountPrice</th>
            <th>AllReviews</th>
            <th>PosReviews</th>
            <th>ReleaseDate</th>
            <th>Tag</th>
            <th>Genre</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <div>
                <input placeholder="" v-model="tagName" v-on:keypress.enter="getAllVrGameData()">
                <!--              <button v-on:click="sortByTag()">Kuva</button>-->
              </div>
            </th>
            <th>
              <div class="genrename">
                <select v-model="genreName" class="from-genrename" v-on:click="getAllVrGameData()">
                  <option></option>
                  <option value="Action">Action</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Massively Multiplayer">Massively Multiplayer</option>
                  <option value="RPG">RPG</option>
                  <option value="Simulation">Simulation</option>
                  <option value="Strategy">Strategy</option>
                  <option value="Indie">Indie</option>
                  <option value="Early Access">Early Access</option>
                  <option value="Free to Play">Free to Play</option>
                  <option value="Casual">Casual</option>
                  <option value="Racing">Racing</option>
                  <option value="Sports">Sports</option>
                  <option value="Design & Illustration">Design & Illustration</option>
                  <option value="Utilities">Utilities</option>
                </select>
              </div>
            </th>
          </tr>
          <tr v-for="row in fulltable">
            <td>{{ row.game_id }}</td>
            <td>{{ row.gameName }}</td>
            <td>{{ row.currentPrice }}€</td>
            <td>{{ row.metascore }}%</td>
            <td>{{ row.discountedPrice }}€</td>
            <td>{{ row.reviews }}</td>
            <td>{{ row.positiveReviews }}%</td>
            <td>{{ row.releaseDate }}</td>
            <td>{{ row.tag }}</td>
            <td>{{ row.genre }}</td>
          </tr>
        </table>
      </table>
    </div>
  </div>
</template>

<script>

export default {

  name: 'PageOne',
  data: function () {
    return {
      fulltable: '',
      game_id: '',
      gameName: '',
      currentPrice: '',
      metascore: '',
      publisher: '',
      discountedPrice: '',
      reviews: '',
      positiveReviews: '',
      releaseDate: '',
      tag: '',
      genre: '',
      rowsPerPage: '',
      pageNumber: '',
      select: '',
      columnName: '',
      tagName: '',
      genreName: ''
    }
  },


  methods: {
    getAllVrGameData: function () {
      this.$http.get("/getvrgamedata/",{
        params: {
          a: this.rowsPerPage,
          b: this.pageNumber,
          c: this.columnName,
          d: this.select,
          e: this.tagName,
          f: this.genreName
        }
      })
          .then(response => {
            this.fulltable = response.data.data
          }).catch(function (response) {

      })
    },

    updateGameData: function () {
      this.$http.get("/update/")
      .then(response => {

      }).catch(function (response) {

      })
    }

  }
}
</script>


<style>
#vrgametabel {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 1200px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  table-layout: fixed;
  text-align: center;
}

#vrgametabel th {
  padding: 5px 10px;
  color: #009879;
  column-width: 150px;
  text-align: center;
  align-items: center;
}

#vrgametabel td {
  padding: 5px 10px;

}

#vrgametabel tr {
  border-bottom: 1px solid darkgray;
}

#vrgametabel tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

#vrgametabel tr:last-of-type {
  border-bottom: 2px solid #009879;
}

#pageCount {
  box-sizing: border-box;
  width: fit-content;
}

</style>

