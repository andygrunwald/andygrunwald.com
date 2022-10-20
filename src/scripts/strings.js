export function cutText(input, len) {
	let text = input;
	if (text.length > len) {
		const cutAt = text.lastIndexOf(' ', len);
		if (cutAt != -1) {
			text = text.substring(0, cutAt) + '...';
		}
	}

	return text;
}