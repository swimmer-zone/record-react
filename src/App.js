import React from 'react';
import Music from './Layout/Music';
import './App.scss';

const App = () => {
	const birthday = '1986-03-01';

	function calcAge(dateString) {
	  	var birthday = +new Date(dateString);
	  	return ~~((Date.now() - birthday) / (31557600000));
	}

  	return (
	    <>
			<header>Dub of the Record</header>
			<section>
				<p>
					Welcome People, enjoy my music ;)
				</p>
				<h2>About me</h2>
				<p>
					Music is part of it! Of what? Of everything, including my life. I am <a href="http://www.facebook.com/profile.php?id=100000167613453" title="Visit my Facebook">Marc van der Plaat</a>, {calcAge(birthday)} years old and live in Venlo. From origin I am a bassplayer and made all kinds of music. From punk, rock, ska, 
					dub, reggae, world and oriental. In my sparetime I mess around with music programs and mix it up with live 
					instruments. My aim is oriental-dub but it's always a new surprise what comes out. So enjoy the music, please 
					comment me and let your inspiration flow. Let me know if you can add some sounds or something to say. Peace.
				</p>
				<h2>Tracks</h2>
				<Music project="record" />
			</section>
			<p id="copy">&copy; <a href="http://swimmer.zone/">Swimmer</a> 2011 - {(new Date().getFullYear())}</p>
			<footer>&#9658;</footer>
	    </>
  	);
}

export default App;