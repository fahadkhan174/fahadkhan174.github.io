<div class="loader">
	<div class="inner one dark:border-loader border-b-[3px] border-solid border-black"></div>
	<div class="inner two dark:border-loader border-r-[3px] border-solid border-black"></div>
	<div class="inner three dark:border-loader border-t-[3px] border-solid border-black"></div>
</div>

<style>
	.loader {
		position: absolute;
		top: calc(50% - 15rem);
		left: calc(100% - 20rem);
		width: 12rem;
		height: 12rem;
		border-radius: 50%;
		perspective: 200rem;
	}

	.inner {
		position: absolute;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.inner.one {
		left: 0%;
		top: 0%;
		animation: rotate-one 1.5s linear infinite;
	}

	.inner.two {
		right: 0%;
		top: 0%;
		animation: rotate-two 1.5s linear infinite;
	}

	.inner.three {
		right: 0%;
		bottom: 0%;
		animation: rotate-three 1.5s linear infinite;
	}

	@keyframes rotate-one {
		0% {
			transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
		}
		100% {
			transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
		}
	}

	@keyframes rotate-two {
		0% {
			transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
		}
		100% {
			transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
		}
	}

	@keyframes rotate-three {
		0% {
			transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
		}
		100% {
			transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
		}
	}
</style>
