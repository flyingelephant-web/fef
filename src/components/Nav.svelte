<script>
	import { stores } from '@sapper/app';
	import { includes } from 'lodash';
import LogoSvg from './UI/LogoSVG.svelte';
  const { page } = stores();
  $: console.log($page.path);
	let isAbsolute;
	let showMobileMenu = false;
	const menuItems = [{
			id: 1,
			label: 'Home',
			slug: '/',
			hasSubMenu: false
		},
		{
			id: 2,
			label: 'Commercials',
			slug: 'commercials',
			hasSubMenu: false
		},
		{
			id: 3,
			label: 'TV Shows',
			slug: 'tv-shows',
			hasSubMenu: false
		},
		{
			id: 4,
			label: 'Influencer Films',
			slug: 'influencer-films',
			hasSubMenu: false
		},
		{
			id: 5,
			label: 'Documentaries',
			slug: 'documentaries',
			hasSubMenu: false
		},
		{
			id: 6,
			label: 'Animations',
			slug: 'animations',
			hasSubMenu: false
		},
		{
			id: 9,
			label: 'Digital Campaigns',
			slug: 'digital-campaigns',
			hasSubMenu: false
		},
		{
			id: 7,
			label: 'Team',
			slug: 'team',
			hasSubMenu: false
		}, {
			id: 8,
			label: 'Contact',
			slug: 'contact',
			hasSubMenu: false
		}
	]


		$:  isAbsolute = ($page.path === '/') ?  true : false;

	const setNavPosition = () => {
		if($page.path === '/' || includes($page.path, ['contact'])) {
			return true;
		}
		return false;
	};
</script>

<style>
	nav {
		font-weight: 300;
	}
/*
	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	} */

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<div class="relative bg-transparent">
  <div class="max-w-7xl mx-auto px-4 sm:px-6  w-full z-10 {isAbsolute ? 'lg:absolute' : ''}">
    <div class="flex justify-between items-center lg:justify-start lg:space-x-10">
      <div class="w-full flex items-center flex-row lg:w-0 lg:flex-1 justify-center">
				<a alt="Flying Elephant Films Logo" href="/" class="flex lg:mr-5 xl:mr-10">
					<LogoSvg className="lg:hidden my-4 w-40"  color="#000"></LogoSvg>
          <img class="h-8 w-auto lg:h-22 xl:h-24 hidden lg:block" src="fef-elephant.png" alt="Workflow">
				</a>
				<nav class="w-full justify-start hidden lg:flex md:space-x-6 lg:space-x-8 xl:space-x-10 items-center lg:w-auto overflow-scroll lg:justify-center">
					{#each menuItems as menu }
						<a href="{menu.slug}" class="{menu.label.toLowerCase() === 'home' && 'hidden lg:block'} text-xs leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 font-fef">
							{menu.label.toUpperCase()}
						</a>
					{/each}
				</nav>
      </div>
      <div class="-mr-2 -my-2 lg:hidden">
        <button aria-label="Menu" type="button" on:click="{() => {showMobileMenu = true}}" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
	</div>
	{#if showMobileMenu}
		<div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-50 h-screen">
			<div class="rounded-lg shadow-lg h-full">
				<div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50 h-full">
					<div class="pt-5 pb-6 px-5 space-y-6">
						<div class="flex items-center justify-between">
							<div>
								<LogoSvg className="lg:hidden my-4 w-40"  color="#000"></LogoSvg>
							</div>
							<div class="-mr-2">
								<button aria-label="Close Menu" type="button" on:click="{() => {showMobileMenu = false}}" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
									<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
						</div>
						<div>
							<nav class="grid row-gap-8">
								{#each menuItems as menu }
									<a href="{menu.slug}" on:click="{() => {showMobileMenu = false}}" class="text-xs leading-6 font-medium text-gray-500 font-fef m-1 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 hover:text-gray-900  focus:text-gray-900  focus:outline-none transition ease-in-out duration-150">
											{menu.label.toUpperCase()}
									</a>
								{/each}
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

