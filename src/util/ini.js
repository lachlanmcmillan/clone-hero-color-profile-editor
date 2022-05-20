export const parseIni = (iniAsString) => {
	const sections = iniAsString
		.split('[')
		.filter(x => !!x)
		.map(sectionText => {
			const parts = sectionText.split(']'); 
			const [sectionTitle, sectionBody] = parts;
			if (parts.length > 2) {
				throw new Error("malformed ini file");
			}

			const lines = sectionBody
				.split('\n')
				.map(line => line.trim())
				.filter(line => !!line) // remove empty
				.map(line => line.split(' = '))
				.reduce((output, line) => {
					const [key, value] = line;
					if (key in output) {
						throw new Error(`duplicate line '${key}' in section '${sectionTitle}'`);
					}
					output[key] = value;
					return output;
				}, {});

				return [sectionTitle, lines];
		}).reduce((output, [sectionTitle, lines]) => {
			output[sectionTitle] = lines;
			return output;
		}, {});

	return sections;
}

export const generateIni = (originalIni, config) => {
	let section = null;
	return originalIni
		.split('\n')
		.map(line => {
			if (line.trim() === '') {
				return line;
			}
			if (line.startsWith('[')) {
				section = line.trim().replace('[','').replace(']','');
				return line;
			} else {
				if (!section) {
					throw new Error("error generating file");
				}
				const [key] = line.split(' = ');
				return `${key} = ${config[section][key]}`;
			}
		})
		.join('\n')
}