import { useState } from "react";
import { useEffect } from "react";

const Scrapper = () => {
  const cheerio = require("cheerio");
  const axios = require("axios");
  const [data, setData] = useState([]);
  const newss = [];

  axios.get('')
    .then(res => {
        let $ = cheerio.load(html)
        $('span.comhead').each(function() {
          let a = $(this).prev()
          let title = a.text()
          let uri = a.attr('href')
          let rank = a.parent().parent().text()
          let subtext = a.parent().parent().next().children('.subtext').children()
          let author = $(subtext).eq(1).text()
          let points = $(subtext).eq(0).text()
          let comments = $(subtext).eq(5).text()
          let obj = {
            title: title,
            uri: uri,
            author: author,
            points: points,
            comments: comments,
            rank: parseInt(rank)
          }
          if (obj.rank <= posts) {
            newss.push(obj)
          }

        })
        if (results.length > 0) {
          newss.log(results)  
          setData(newss) 
          return results
        }
            
            


    }).catch(err => console.error(err))

      

    

  return (
    <ul>
      {data.map((read) => {
        return (
          <li>
            <a href={read}>{read} </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Scrapper;
