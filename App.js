import React, { Component } from 'react';
import './_scss/App.css';
import Header from './Components/header/Header';
import HeaderBall from './Components/headerBall/HeaderBall';
import VideoHolder from './Components/videoholder/VideoHolder';
import Popup from './Components/Popup/popup';
import Videoplayer from './Components/Videoplayer/videoplayer';
import $ from 'jquery';

class App extends Component {
  state = {
    videos : [
      {title: 'Dumb grocery guy', des: 'Look at this douchebag!', link:'https://www.youtube.com/embed/AyUvpXyUqQo'},
      {title: 'Fender Stratocaster review', des: 'My opinions on the strat.', link:'https://www.youtube.com/embed/Py_VfFktYZs'},
      {title: 'Fat truck driver', des: 'Fat truck driver gets mad!', link:'https://www.youtube.com/embed/vNk4PURwYyM'},
      {title: "John Doe's failed proposal", des: 'Poor guy gets rejected.', link:'https://www.youtube.com/embed/5jpMBS81X0c'}
    ],
    showpopup : true,
    title : 'Title',
    desc : 'Description...',
    mainSrc : ''
  }
  showPop = () => {
    let showpop = this.state.showpopup;
    this.setState({
      showpopup:!showpop,
      title : 'Title',
      desc : 'Description...'
    });
    document.querySelector('#src').value = '';
    if (this.state.showpopup) {
      document.querySelector('.Popup').style.display = 'block';
    }   
    else{
      document.querySelector('.Popup').style.display = 'none';
    }
  }
  changeTitle = (event) => {
    this.setState({
      title:event.target.value
    });
  }
  changeDesc = (event) => {
    this.setState({
      desc:event.target.value
    });
  }
  showGreen = () => {
    var $div2 = $('.greenline');
    if ($div2.data("active")) { return; }
    $div2.show().data("active", true);
    setTimeout(function() {
      $div2.hide().data("active", false);
    }, 500);
  }
  upload = () => {
    let tile = this.state.title;
    let desc = this.state.desc;
    let currentVids = this.state.videos;
    this.showGreen();
    let newVids = currentVids.unshift({title:tile, des:desc});

    let srcInput = document.querySelector('#src').value.split('');
    srcInput.splice(8, 1, 'www.y');
    srcInput.splice(13, 1, '');
    srcInput.splice(15, 1, 'e.com');
    srcInput.splice(17, 1, 'embed/'+srcInput[17]);

    let objTitle, objDes, objLink;
    objTitle = this.state.videos[0].title;
    objDes = this.state.videos[0].des;

    let newObj = {title: objTitle, des: objDes, link: srcInput.join('')};
    let newSetofVideos = this.state.videos;
    newSetofVideos.splice(0, 1, newObj);
    
    this.setState({videos:newSetofVideos});
    this.showPop();
  }
  delVid = (index) => {
    if (window.confirm('Are you sure?')) {
      const vids = this.state.videos;
      vids.splice(index, 1);
      this.setState({videos:vids});
      let $div = $('.Deleted');
      if ($div.data("active")) { return; }
      $div.show().data("active", true);
      setTimeout(function() {
        $div.hide().data("active", false);
      }, 500);
    }
    else {
      let $div = $('.DeleteCancelled');
      if ($div.data("active")) { return; }
      $div.show().data("active", true);
      setTimeout(function() {
        $div.hide().data("active", false);
      }, 500);
    }
    
  }
  playVideo = (index) => {
    document.querySelector('.Videoplayer').style.display = 'block';
    $('.playzone').hide();
    $('.playzone').fadeIn(500);
    let src = this.state.videos[index].link;
    this.setState({mainSrc:src.toString()});
  }
  closeVideo = () => {
    document.querySelector('.Videoplayer').style.display = 'none';
  }
  render() {
    $(document).ready(() => {
        $(window).scroll(() => {  
          if ($(window).scrollTop() > 5) {
              $('.HeaderBall').slideUp(400); 
          }
          else {
              $('.HeaderBall').slideDown(400);
          }
        });
    });
    return (
      <div className="App">
        <Header />
        <HeaderBall showPop={this.showPop} />
        <br/><br/><br/><br/>
        <Videoplayer closeVideo={this.closeVideo} link={this.state.mainSrc} />
        <Popup upload={this.upload} titleVal={this.state.title} descVal={this.state.desc} hidePop={this.showPop} changeTitle={this.changeTitle} changeDesc={this.changeDesc} title={this.state.title} desc={this.state.desc} />
        <h2 align="center" >Videos</h2>
        <div className="greenline">New video</div>
        <h1 className="Deleted">Deleted</h1>

        <h1 className="DeleteCancelled">Delete cancelled</h1>
        {this.state.videos.map((vid, index) => {
          return <VideoHolder link={vid.link} playVideo={() => this.playVideo(index)} key={index} delete={() => this.delVid(index)} showSrc={vid.link} title={vid.title} des={vid.des} />
        })}
        <br/><br/>
      </div>
    );
  }
}

export default App;

