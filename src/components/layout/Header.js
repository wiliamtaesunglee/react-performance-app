import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa'; 

export const Header = ()  => {
	return(
		<header>
			<nav>
				<div>
					<p>this is a image</p>
				</div>

				<div>
					<ul>
						<li>+</li>
						<li>
							<FaPizzaSlice/>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};
