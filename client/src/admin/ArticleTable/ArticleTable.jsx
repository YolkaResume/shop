import React from 'react'
import Divider from '@mui/joy/Divider';
import styles from "./styles.module.css"

export default function ArticleTable({articles}) {
  return (
    <div className={styles.Table}>
      {articles.map((article)=>{
            return(
                <div key={article.id}>
                <div  className={styles.TabItem}>
                    <div>
                        Name: {article.name}
                    </div>
                    <div>
                        Price: {article.price}
                    </div>
                    <div>
                        Amount: {article.amount}
                    </div>
                    

                                </div>
                                
                <Divider sx={
                    {height:"2px",
                    width:"100%",
                     marginTop:"10px",
                     background:"#222"
                    }
                }></Divider>
                </div>
            )
        })}
    </div>
  )
}
