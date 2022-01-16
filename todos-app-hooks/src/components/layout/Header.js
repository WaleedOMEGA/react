import React, { useEffect, useRef } from 'react';
 
const Header = (props) => {
	const headerStyle = {
		backgroundColor: '#678c89',
		color: '#fff',
		padding: '10px 15px',
    };
    const isInitialMount = useRef(true);
		console.log(isInitialMount); 
	useEffect(() => {
		var x = Math.floor(Math.random() * 256);
		var y = Math.floor(Math.random() * 256);
		var z = Math.floor(Math.random() * 256);
		var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
		  if (isInitialMount.current) {
				isInitialMount.current = false;
			} else {
				document.getElementById('inH1').innerHTML = 'clicked';
				document.getElementById('inH1').style.backgroundColor = bgColor;
			}  
	}, [props.headerSpan]);
	return (
		<header style={headerStyle}>
			<h1 style={{ fontSize: '25px', lineHeight: '1.447em', margin: '0px' }}>
				Simple Todo App <span id="inH1"></span>
			</h1>
		</header>
	);
};
export default Header;
