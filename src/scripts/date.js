export function formatDate(date) {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	return new Date(date).toLocaleDateString('en-GB', options);
}

export function formatUnixTimestampToDate(timestamp) {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	return new Date(timestamp * 1000).toLocaleDateString('en-GB', options);
}