import './_header.scss';

export default function Header({ title }: { title: string }) {
	return (
		<div>
			<h1 className="header">{title}</h1>
		</div>
	);
}
