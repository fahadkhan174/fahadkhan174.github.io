<script>
	import CogLoader from '@/lib/components/CogLoader.svelte';
	import Envelope from '@/lib/components/Envelope.svelte';
	import Github from '@/lib/components/Github.svelte';
	import Instagram from '@/lib/components/Instagram.svelte';
	import LinkedIn from '@/lib/components/LinkedIn.svelte';
</script>

<div class="bg-background dark:bg-gray-900 dark:text-white">
	<nav
		id="nav"
		class="bg-background fixed top-0 z-10 flex w-full items-center justify-center gap-8 p-4 sm:justify-end sm:px-36 sm:text-xl dark:bg-gray-900"
	>
		<a href="#about" class="hover:underline">About</a>
		<a href="#skills" class="hover:underline">Skills</a>
		<a href="#experience" class="hover:underline">Experience</a>
		<a href="#contacts" class="hover:underline">Contacts</a>
	</nav>

	<section id="about" class="flex h-screen w-full flex-col justify-center p-4 md:px-36">
		<div>
			<div class="mb-4">
				<h1 class="mb-3 text-4xl sm:text-6xl">Hi, I'm Fahad.</h1>
				<div class="sm:text-2xl">
					<p>Full Stack Engineer who develops user centric products.</p>
					<p>Passionate to create them with engineering and design principles.</p>
					<p>Currently working with <span class="font-bold"> IBM⚡</span></p>
				</div>
			</div>
			<div>
				<h1 class="mb-3 text-2xl sm:text-4xl">Top Skills</h1>
				<p class="sm:text-2xl">Java • JavaScript • SpringBoot • ReactJS</p>
			</div>
		</div>
	</section>

	<!-- Skills -->
	<section id="skills" class="mb-4 flex w-full flex-col gap-4 p-4 pt-16 md:px-36">
		<h1 class="mb-4 text-2xl underline sm:text-4xl">Skills</h1>
		<div class="flex flex-wrap gap-3">
			<div class="bg-divBg min-w-2/5 flex-auto rounded-xl p-4 text-white md:min-w-1/4">
				<div class="font-jetbrains mb-4 text-xl">Languages</div>
				<div>
					<ul class="ml-4 list-disc">
						<li>Java</li>
						<li>JavaScript</li>
					</ul>
				</div>
			</div>
			<div class="bg-divBg min-w-2/5 flex-auto rounded-xl p-4 text-white md:min-w-1/4">
				<div class="font-jetbrains mb-4 text-xl">Frameworks</div>
				<div>
					<ul class="ml-4 list-disc">
						<li>SpringBoot</li>
						<li>React</li>
						<li>SvelteKit *</li>
					</ul>
				</div>
			</div>
			<div class="bg-divBg min-w-2/5 flex-auto rounded-xl p-4 text-white md:min-w-1/4">
				<div class="font-jetbrains mb-4 text-xl">Databases</div>
				<div>
					<ul class="ml-4 list-disc">
						<li>MongoDB</li>
						<li>MySQL</li>
						<li>Couchbase</li>
						<li>IBM Cloudant</li>
					</ul>
				</div>
			</div>
			<div class="bg-divBg min-w-2/5 flex-auto rounded-xl p-4 text-white md:min-w-1/4">
				<div class="font-jetbrains mb-4 text-xl">Client Side Tech.</div>
				<div>
					<ul class="ml-4 list-disc">
						<li>HTML, CSS</li>
						<li>MUI, MantineUI</li>
						<li>Bootstrap, TailwindCSS</li>
					</ul>
				</div>
			</div>
			<div class="bg-divBg min-w-2/5 flex-auto rounded-xl p-4 text-white md:min-w-1/4">
				<div class="font-jetbrains mb-4 text-xl">Server Side Tech.</div>
				<div>
					<ul class="ml-4 list-disc">
						<li>Maven, Gradle</li>
						<li>Servlet, JSP’s</li>
						<li>Apache POI, AWS S3</li>
						<li>Github Actions *</li>
					</ul>
				</div>
			</div>
			<div class="bg-divBg min-w-2/5 flex-auto rounded-xl p-4 text-white md:min-w-1/4">
				<div class="font-jetbrains mb-4 text-xl">Tools</div>
				<div>
					<ul class="ml-4 list-disc">
						<li>IDEA, Eclipse</li>
						<li>SQL Dev., VS Code</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Experience -->
	<section id="experience" class="mb-4 flex w-full flex-col gap-4 p-4 pt-16 md:px-36">
		<h1 class="mb-4 text-2xl underline sm:text-4xl">Experience</h1>
		<div>
			<ol class="relative border-s dark:border-gray-700 dark:text-white">
				<li class="ms-6 mb-10">
					<span class="absolute -start-4 flex h-8 w-8 items-center justify-center">
						<span class="text-4xl text-fuchsia-500">•</span>
					</span>
					<h3 class="text-2xl leading-tight font-medium">IBM, (IBM Italy) (Nov-2023 To present)</h3>
					<p class="mb-1 text-xl">
						<span class="font-bold italic">Tech:</span> Springboot, Cloudant, IBM DB2, Node, Apache POI,
						IBM COS SDK
					</p>
					<div class="ml-4">
						<ul class="flex list-disc flex-col gap-1">
							<li>
								Migrating a X-platform application to cloud services build upon Springboot and
								Angular, following microservices design.
							</li>
							<li>
								Implemented the <span class="font-bold">authentication</span> mechanisms using cookies
								and related session APIs for FE integration.
							</li>
							<li>
								Create and integrate APIs to show <span class="font-bold">IBM DB2</span> data in new
								interface till the time old application is not sunset.
							</li>
							<li>
								Created <span class="font-bold">NodeJS script</span> to backup data from Cloudant and
								store into S3 buckets using IBM COS SDK.
							</li>
							<li>
								Proposed and implemented use of <span class="font-bold">Javadoc-Scribe library</span
								> to maintain swagger API-docs using standard java-docs at controller and method mappings.
							</li>
							<li>
								Integrate multiple third-party libraries such as <span class="font-bold"
									>Apache POI, Java Email, newer Cloudant SDK</span
								> for performance metrics etc. single handedly.
							</li>
							<li>
								Closely working with client personnel's to understand the requirements/existing
								functionalities to be transformed to newer tech stack.
							</li>
						</ul>
					</div>
				</li>
				<li class="ms-6 mb-10">
					<span class="absolute -start-4 flex h-8 w-8 items-center justify-center">
						<span class="text-4xl text-black dark:text-white">•</span>
					</span>
					<h3 class="text-2xl leading-tight font-medium">IBM (AMEX) (Dec-2022 To Nov-2023)</h3>
					<p class="mb-1 text-xl">
						<span class="font-bold italic">Tech:</span> Springboot, Vertx, Couchbase
					</p>
					<div class="ml-4">
						<ul class="flex list-disc flex-col gap-1">
							<li>
								Enhancing and maintaining a number of platform repos that are consumed by other
								teams as dependencies ex- kafka-client, rest-client etc.
							</li>
							<li>
								Worked on creating <span class="font-bold">scheduler scripts</span> for cleaning up db,
								redundant data or data fixes.
							</li>
							<li>
								<span class="font-bold">Version upgrades</span> for platform repos dependencies, troubleshoot
								issues, code reviews etc.
							</li>
							<li>
								Involved in all phases of SDLC from analysis, design, development, testing,
								implementation and maintenance.
							</li>
							<li>
								Trained new members on application functionalities and troubleshooting errors.
							</li>
						</ul>
					</div>
				</li>
				<li class="ms-6 mb-10">
					<span class="absolute -start-4 flex h-8 w-8 items-center justify-center">
						<span class="text-4xl text-black dark:text-white">•</span>
					</span>
					<h3 class="text-2xl leading-tight font-medium">TCS (Microsoft) (Apr-2022 To Aug-2022)</h3>
					<p class="mb-1 text-xl">
						<span class="font-bold italic">Tech:</span> Springboot, Couchbase, ReactJS
					</p>
					<div class="ml-4">
						<ul class="flex list-disc flex-col gap-1">
							<li>
								Worked on migrating a monolith application to Springboot based <span
									class="font-bold">microservices</span
								>
								architecture with frontend built in <span class="font-bold">ReactJS</span>.
							</li>
							<li>
								Created a feature where we use <span class="font-bold">docfx</span> tool to create blobs
								for repo, store in Azure storage and serve content through webapp deployed over Azure
								webservices.
							</li>
						</ul>
					</div>
				</li>
				<li class="ms-6 mb-10">
					<span class="absolute -start-4 flex h-8 w-8 items-center justify-center">
						<span class="text-4xl text-black dark:text-white">•</span>
					</span>
					<h3 class="text-2xl leading-tight font-medium">
						TCS (Motorola Solutions Enterprise) (Jan-2020 To Feb-2022)
					</h3>
					<p class="mb-1 text-xl">
						<span class="font-bold italic">Tech:</span> ReactJS, MUI, Redux Thunk
					</p>
					<div class="ml-4">
						<ul class="flex list-disc flex-col gap-1">
							<li>
								Implementation of frontend features using <span class="font-bold"
									>ReactJS, Redux Thunk, Material UI framework
								</span> etc.
							</li>
							<li>
								Involved in the Requirement Analysis for features, discussions on Design and
								Development.
							</li>
						</ul>
					</div>
				</li>
				<li class="ms-6 mb-10">
					<span class="absolute -start-4 flex h-8 w-8 items-center justify-center">
						<span class="text-4xl text-black dark:text-white">•</span>
					</span>
					<h3 class="text-2xl leading-tight font-medium">
						TCS (Royal Bank of Scotland) (Jan-2019 To Dec-2020)
					</h3>
					<p class="mb-1 text-xl">
						<span class="font-bold italic">Tech:</span> Redux, React Bootstrap, React-Table
					</p>
					<div class="ml-4">
						<ul class="flex list-disc flex-col gap-1">
							<li>
								Created web application components using React Along with customer WebSDK, used
								third party libraries like Redux, React Bootstrap, React-Table etc.
							</li>
							<li>
								Worked on design documents based on the features and functionalities to provide with
								the migrated application on newer technology stack.
							</li>
						</ul>
					</div>
				</li>
				<li class="ms-6 mb-10">
					<span class="absolute -start-4 flex h-8 w-8 items-center justify-center">
						<span class="text-4xl text-black dark:text-white">•</span>
					</span>
					<h3 class="text-2xl leading-tight font-medium">
						TCS (Astellas Pharma) (Sep-2017 To Dec-2018)
					</h3>
					<p class="mb-1 text-xl">
						<span class="font-bold italic">Tech:</span> Springboot, MongoDB
					</p>
					<div class="ml-4">
						<ul class="flex list-disc flex-col gap-1">
							<li>
								Worked on Spring MVC for development and act as first level support for customer
								problems, prepared various POCs build on Java, Spring and MongoDB.
							</li>
							<li>Involved in analysis and requirement gathering for new features.</li>
						</ul>
					</div>
				</li>
				<li class="ms-6 mb-10">
					<span class="absolute -start-4 flex h-8 w-8 items-center justify-center">
						<span class="text-4xl text-black dark:text-white">•</span>
					</span>
					<h3 class="text-2xl leading-tight font-medium">
						TCS (Projects and Development India Ltd.) (Aug-2016 To Aug-2017)
					</h3>
					<p class="mb-1 text-xl">
						<span class="font-bold italic">Tech:</span> Java, Documentum
					</p>
					<div class="ml-4">
						<ul class="flex list-disc flex-col gap-1">
							<li>
								Involved in Development Support activities, worked extensively on java to create
								custom actions in Documentum.
							</li>
							<li>
								Creating cron jobs running java scripts to create periodic reports & prepared
								management reports and perform daily/weekly checklists.
							</li>
						</ul>
					</div>
				</li>
			</ol>
		</div>
	</section>

	<!-- Contacts -->
	<section id="contacts" class="flex h-50 w-full flex-col gap-4 p-4 md:px-36">
		<h1 class="mb-4 text-2xl underline sm:text-4xl">Contacts</h1>
		<div class="flex flex-wrap gap-3">
			<div class="w-1/5 flex-auto rounded p-2 text-center text-xl sm:text-2xl">
				<span class="group">
					<a
						href="mailto:fahadkhan174@gmail.com"
						class="group-hover:text-blue-500"
						referrerpolicy="no-referrer"
						target="_blank"
					>
						<Envelope classes="h-10 w-10 inline fill-current" />
					</a>
				</span>
			</div>
			<div class="w-1/5 flex-auto rounded p-2 text-center text-xl sm:text-2xl">
				<span class="group">
					<a
						href="https://github.com/fahadkhan174"
						class="group-hover:text-gray-500"
						referrerpolicy="no-referrer"
						target="_blank"
					>
						<Github classes="h-10 w-10 inline fill-current" />
					</a>
				</span>
			</div>
			<div class="w-1/5 flex-auto rounded p-2 text-center text-xl sm:text-2xl">
				<span class="group">
					<a
						href="https://www.linkedin.com/in/mohd-fahad-123205101/"
						class="group-hover:text-twitter"
						referrerpolicy="no-referrer"
						target="_blank"
					>
						<LinkedIn classes="h-10 w-10 inline fill-current" />
					</a>
				</span>
			</div>
			<div class="w-1/5 flex-auto rounded p-2 text-center text-xl sm:text-2xl">
				<span class="group">
					<a
						href="https://instagram.com/fahadkhan174"
						class="group-hover:text-instagram"
						referrerpolicy="no-referrer"
						target="_blank"
					>
						<Instagram classes="h-10 w-10 inline fill-current" />
					</a>
				</span>
			</div>
		</div>
	</section>

	<!-- Animation -->
	<div class="hidden h-50 w-full flex-col gap-4 p-4 md:px-36 lg:flex">
		<CogLoader />
	</div>
</div>
