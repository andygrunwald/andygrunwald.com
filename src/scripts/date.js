const options = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric'
};

export function formatDate(date) {
	if (!date) return '';
	const d = new Date(date);
	if (isNaN(d.getTime())) return '';
	return d.toLocaleDateString('en-GB', options);
}
