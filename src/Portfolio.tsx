import { useDocumentHead } from "./hooks/useDocumentHead";
import Routing from "./Routing";
import TabLayout from "./components/layout/TabLayout";

const BASE_DESCRIPTION =
	"Abesh Ahsan - CSE graduate from IUT building modern web, mobile, desktop applications and ML systems. Passionate about full-stack development and computer vision.";
const SHARE_IMAGE = "https://abesh.dev/social-card.png";
const SHARE_URL = "https://abesh.dev/";

export default function Portfolio() {
	const title = "Abesh Ahsan | Portfolio";
	useDocumentHead({
		title,
		description: BASE_DESCRIPTION,
		image: SHARE_IMAGE,
		url: SHARE_URL,
	});

	return (
		<Routing>
			<TabLayout />
		</Routing>
	);
}

