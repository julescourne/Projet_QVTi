<script>
/* eslint-disable */
import { INDEX_FIRST_QUESTION } from '@/utils/constants/constants'
import { parseCSV } from '@/utils/parser.utils'
import ChartBarVue from './ChartBar/ChartBar.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    ChartBarVue
  },
  data() {
  	return {
      csv: [],
      firstRaw: [],
      INDEX_FIRST_QUESTION: INDEX_FIRST_QUESTION
  	}
	},
  mounted () { // au chargement
    const file = document.getElementById( 'input' )
    
    file.addEventListener( 'change', async ( e ) => {
    const file = e.target.files[ 0 ]
    const text = await file.text()
    this.csv = parseCSV( text )
    this.firstRaw = this.csv[ 0 ]
   })
  }
}
</script>

<template>
  <div v-if="csv.length === 0">
    <div class="hello">
      <h1>Please select a CSV file to load :</h1>
    </div>
    <!-- Sélectionner du fichier à parser -->
    <input id="input" type="file" placeholder="Upload file"
      accept=".csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
  </div>
  <div v-if="csv.length > 0">
    <!-- Affichage des graphiques -->
    <div id="barCharList">
      <div v-for="raw, index of csv[0]" :key="index" >
        <ChartBarVue :csv="csv" :firstRaw="firstRaw" :index="index">
        </ChartBarVue>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

#barCharList
{
  display: grid ;
  grid-template-columns:repeat(20, 1fr);
  margin: 10 10px;
  background-color: gray;
}

a {
  color: #42b983;
}
</style>
