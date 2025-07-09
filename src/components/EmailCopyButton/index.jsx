import { useState, useEffect } from "react";
import { BoxContactEmail, Button } from "./styles";
import { Check, Copy } from "phosphor-react";

export function EmailCopyButton() {
	const [copied, setCopied] = useState(false);
	const email = "thianecw@hotmail.com";

	function handleCopy() {
		navigator.clipboard
			.writeText(email)
			.then(() => {
				setCopied(true);
			})

			.catch((err) => {
				console.error("Erro ao copiar o email: ", err);
			});
	}

	useEffect(() => {
		if (copied) {
			const timer = setTimeout(() => setCopied(false), 2000);
			return () => clearTimeout(timer);
		}
	}, [copied]);

	return (
		<BoxContactEmail>
			<p>{email}</p>
			<Button onClick={handleCopy}>
				{copied ? (
					<Check size={28} color="#eeeeee" />
				) : (
					<Copy size={28} color="#eeeeee" />
				)}
			</Button>
		</BoxContactEmail>
	);
}
