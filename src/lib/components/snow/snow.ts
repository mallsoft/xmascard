const normalizeTo = (x: number, min: number, max: number) => {
	return (x - min) / (max - min);
};

export class SnowFlake {
	static small: number = 1;
	static large: number = 3;

	private min: number;
	private max: number;
	private r: number;

	private fallSpeed: number;

	private x: number;
	private y: number;

	constructor(min: number, max: number) {
		this.x = innerWidth * Math.random();
		this.y = innerHeight * Math.random();

		this.min = min || SnowFlake.small;
		this.max = max || SnowFlake.large;
		this.r = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

		this.fallSpeed = this.r * 0.05 + Math.random();
	}

	draw(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = `hsla(0,0%,100%,${Math.max(0.01, normalizeTo(this.r, this.min, this.max))})`;

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.fill();
	}

	update(f: number, i: number) {
		const individual = Math.sin(i + f / 3000) * 0.4;
		const windBias = Math.sin(f / 5000) * 0.3;
		this.x += individual + windBias;

		const updrafts = windBias / 2;
		this.y += this.fallSpeed + updrafts;

		if (this.y > innerHeight + this.r) {
			this.y = -this.r;
			this.x = Math.random() * innerWidth;
		}

		if (this.x > innerWidth) this.x = 0;
		if (this.x < 0) this.x = innerWidth;
	}
}
