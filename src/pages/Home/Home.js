import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { useSelector } from 'react-redux'
const Home = () => {


    return (
        <div>
            <div className="home">
                <h4 className="write3">Assalomalaykum</h4>
                <h5 className="write9">12:33</h5>
            </div>
            <div className="home">
                <h4 className="write3">Yaxshimisan. ertaga futbolga borasanmi</h4>
                <h5 className="write9">12:33</h5>
            </div>
            <div className="home2">
                <h4 className="write3">Valaykumasalom. Borolmasam kk</h4>
                <h5 className="write9">12:34</h5>
            </div>
            <div className="home">

                <h4 className="write3">Nma un?</h4>
                <h5 className="write9">12:36</h5>
            </div>
            <div className="home2">
                <h4 className="write3">Darslarim ko'proq edi</h4>
                <h5 className="write9">12:39</h5>
            </div>
            <div className="home">
                <h4 className="write3">Bahodir boradimi bilmisanm?</h4>
                <h5 className="write9">12:40</h5>
            </div>
            <div className="home2">
                <h4 className="write3">U boraman degand borsa kk</h4>
                <h5 className="write9">12:48</h5>
            </div>
            <div className="home">
                <h4 className="write3">Hozir nma qilyabsan?</h4>
                <h5 className="write9">12:55</h5>
            </div>
            <div className="home2">
                <h4 className="write3">Dars qilyamman</h4>
                <h5 className="write9">12:59</h5>
            </div>

        </div>

    )
}
export default Home