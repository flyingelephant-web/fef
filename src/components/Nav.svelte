<script>
	export let segment;
	let showMobileMenu = false;
	const menuItems = [{
			id: 1,
			label: 'Home',
			slug: 'home',
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
			label: 'Digital Films',
			slug: 'digital-films',
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
</script>

<style>
	nav {
		font-weight: 300;
	}

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
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<div class="relative bg-transparent lg:container">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center md:justify-start md:space-x-10">
      <div class="w-full flex items-center flex-col lg:w-0 lg:flex-1 xl:flex-row justify-center">
        <a href="#" class="flex mr-16">
          <img class="h-8 w-auto sm:h-24" src="fef-elephant.png" alt="Workflow">
				</a>
				<nav class="w-full justify-start hidden md:flex space-x-10 items-center lg:w-auto overflow-scroll lg:justify-center">
					{#each menuItems as menu }
						<a href="{menu.slug}" class="text-xs leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 font-fef">
							{menu.label.toUpperCase()}
						</a>
					{/each}
				</nav>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button type="button" on:click="{() => {showMobileMenu = true}}" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
	</div>
	{#if showMobileMenu}
		<div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
			<div class="rounded-lg shadow-lg">
				<div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
					<div class="pt-5 pb-6 px-5 space-y-6">
						<div class="flex items-center justify-between">
							<div>
								<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow">
							</div>
							<div class="-mr-2">
								<button type="button" on:click="{() => {showMobileMenu = false}}" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
									<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
						</div>
						<div>
							<nav class="grid row-gap-8">
								{#each menuItems as menu }
									<a href="{menu.slug}" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
										<div class="text-base leading-6 font-medium text-gray-900">
											{menu.label}
										</div>
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

