import styles from './_header.module.scss';

export default function Header({ title }: { title: string }) {
	return (
		<div>
			<h1 className={styles.header}>{title}</h1>
		</div>
	);
}
