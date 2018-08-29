import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=74cc9f75faa54dd68a9249b2d0fe62e1&q=";

export default {
  search: function(query){
    return axios.get(BASEURL + query)
  }
}


