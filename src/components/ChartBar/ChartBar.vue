<script>
import embed from 'vega-embed'
import { getColumnData } from '@/utils/parser.utils'
import { getResultPerQuestion, convertToJson } from '@/utils/chartbar.utils'
import {INDEX_FIRST_QUESTION} from '@/utils/constants/constants'

export default {
/* eslint-disable */
    name: 'ChartBar',
    props: {
        firstRaw: Array,
        index: Number,
        csv: Array,
    },
    data() {
  	return {
      title : ""
  	}
	},
    mounted () { // au chargement
        
    const index = this.index + INDEX_FIRST_QUESTION;
    if (index >= this.csv[0].length) return 

    this.title = this.firstRaw[index];
    const column = getColumnData( index, this.csv )
    const result = getResultPerQuestion( column )
    
    const json = convertToJson( result, this.title)
      
      const barchar = {
        data: {
        values: json
      },
        width: 100,
        height: 100,
        mark: 'bar',
        encoding: {
          x: {
            field: this.title,
            type: 'ordinal'
          },
          y: {
            field: 'number of reponses',
            type: 'quantitative'
          }
        }
      };

      embed( `#${this.title}` , barchar);
    }
}
</script>

<template>
    <div :id="this.title">
    </div>
</template>
  
<style>

</style>
