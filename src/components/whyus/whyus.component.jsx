import React from 'react';

import './whyus.styles.scss';

//icons
import { ReactComponent as Icon1 } from '../assets/SVG/Asset2.svg';
import { ReactComponent as Icon2 } from '../assets/SVG/Asset3.svg';
import { ReactComponent as Icon3 } from '../assets/SVG/Asset4.svg';

const whyUs = () => (
	<div className="service-container">
		<h1 className="serv-header">Why Buy on mywishlist?</h1>
		<div className="services">
			<div className="service">
				<Icon1 className="serv-icon" />
				<span className="serv-title">Experiences to Match Every Mood</span>
				<span className="serv-paragraph">
					We partner with millions of merchants worldwide, so you're sure to find something you'll love.
				</span>
			</div>
			<div className="service">
				<Icon2 className="serv-icon" />
				<span className="serv-title">Experiences to Match Every Mood</span>
				<span className="serv-paragraph">
					We partner with millions of merchants worldwide, so you're sure to find something you'll love.
				</span>
			</div>
			<div className="service">
				<Icon3 className="serv-icon" />
				<span className="serv-title">Experiences to Match Every Mood</span>
				<span className="serv-paragraph">
					We partner with millions of merchants worldwide, so you're sure to find something you'll love.
				</span>
			</div>
		</div>
	</div>
);

export default whyUs;
