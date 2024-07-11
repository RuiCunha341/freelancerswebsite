import Adamastor from 'assets/cardIllustrations/adamastor.png';
import Maruxinho from 'assets/cardIllustrations/maruxinho.png';
import Cuelebre from 'assets/cardIllustrations/cuelebre.png';
import Basajaun from 'assets/cardIllustrations/basajaun.png';
import BicheDeBere from 'assets/cardIllustrations/bicheDeBere.png';
import LouCarcolh from 'assets/cardIllustrations/louCarcolh.png';
import Civetta from 'assets/cardIllustrations/civetta.png';
import Tarantella from 'assets/cardIllustrations/tarantella.png';
import Alp from 'assets/cardIllustrations/alp.png';
import Nix from 'assets/cardIllustrations/nix.png';
import Tatzelwurm from 'assets/cardIllustrations/tatzelwurm.png';

export interface IGameCardInterface {
    name: string;
    illustration: string;
    stars: number;
    origin: string;
    story: string;
    storySnippet: string;
    lat: number;
    lng: number;
    uniqueCode: string;
}

export interface IGameCardDictionaryInterface {
    [key: string]: IGameCardInterface;
}

export const findGameCardByCode = (
    code: string,
    dictionary: IGameCardDictionaryInterface,
): IGameCardInterface | undefined => {
    return dictionary[code];
};
// <- bigger negative longitude
// -> bigger positive longitude
// ^ -> bigger positive latitude
// v -> bigger negative latitude
export const cardsDictionary: IGameCardDictionaryInterface = {
    // Portugal Entries
    'PT-001': {
        name: 'Adamastor',
        illustration: Adamastor,
        stars: 5,
        origin: 'Portugal',
        story: '<p>In ancient times, amidst the stormy seas of the Southern Atlantic, there emerged a mythical being known as Adamastor, a divine guardian of the perilous Cape of Good Hope. Born from the very storms that raged across uncharted waters, Adamastor embodied the powerful forces of nature. The gods fashioned him to dissuade daring sailors from getting too close to the treacherous Cape.</p><p>Imagine a colossal figure with a face carved from the rocky cliffs of the Cape, its eyes glowing with determination to safeguard the secrets hidden in the vast ocean. Scales adorned its massive body, reflecting the turbulent seas it commanded. Its breath was a fierce wind that warned sailors of impending danger.</p><p>As Portuguese sailors sought new routes through unexplored waters, Adamastor unleashed his wrath, sending fierce winds and towering waves to discourage their progress. His voice echoed through storms, cautioning of the perilous journey ahead. In their pursuit of safe passage, sailors tried to appease the mighty creature through offerings and prayers.</p><p>But as time passed, a change occurred. The once-fearsome Adamastor, recognizing the sailors indomitable spirit, transformed from a harbinger of doom into a silent witness to their maritime triumphs. His powers, once used to hinder, now stood as a testament to the resilience of those facing the unknown.</p>',
        storySnippet:
            'In ancient times, amidst the stormy seas of the Southern Atlantic, there emerged a mythical being known as Adamastor, a divine guardian of the perilous Cape of Good Hope. Born from the very storms that raged across uncharted waters, Adamastor embodied the powerful forces of nature. The gods fashioned him to dissuade daring sailors from getting too close to the treacherous Cape.',
        lat: 39.9071,
        lng: -8.53549,
        uniqueCode: 'PT-001',
    },
    'PT-002': {
        name: 'Maruxinho',
        illustration: Maruxinho,
        stars: 5,
        origin: 'Portugal',
        story: '<p>In times long gone by, within the rustic landscapes of northern Portugal, particularly in the ancient municipality of Chaves, enchanted beings known as Maruxinhos emerged from the mystical tapestry of folklore. These diminutive creatures, reminiscent of elves, found their dwelling places in the remnants of old forts or the subterranean recesses beneath quaint villages, weaving an enchanting tale of their existence.</p><p>Legend has it that the Maruxinhos were born from the whispers of ancient forests and the echoes of babbling brooks. Conceived as guardians of hidden knowledge and protectors of natures secrets, they embodied the very essence of the enchanted realms they inhabited. Small in stature, with thin frames, wrinkled faces, and lively eyes that sparkled with ancient wisdom, Maruxinhos were adorned with long ears and possessed claws in place of hands, a unique manifestation of their otherworldly nature.</p><p>These beings, considered both smart and cunning, reveled in the art of concealment. They thrived in the myriad crevices of their chosen abodes, blending seamlessly with the ancient stones and shadows. The Maruxinhos powers transcended the visible spectrum; they could manipulate the forces of nature, coaxing blossoms to bloom and guiding the growth of ancient trees with a mere whisper.</p><p>As stewards of the hidden places beneath villages and the crumbling remains of forts, Maruxinhos were entrusted with the guardianship of mystical artifacts and ancient wisdom. Their keen intellect and resourcefulness allowed them to navigate seamlessly between the realms of the seen and unseen, ensuring the preservation of their enchanted world.</p>',
        storySnippet:
            'In times long gone by, within the rustic landscapes of northern Portugal, particularly in the ancient municipality of Chaves, enchanted beings known as Maruxinhos emerged from the mystical tapestry of folklore. These diminutive creatures, reminiscent of elves, found their dwelling places in the remnants of old forts or the subterranean recesses beneath quaint villages, weaving an enchanting tale of their existence.',
        lat: 41.9071,
        lng: -7.53549,
        uniqueCode: 'PT-002',
    },
    // Spain Entries
    'ES-001': {
        name: 'Cuélebre',
        illustration: Cuelebre,
        stars: 5,
        origin: 'Spain',
        story: '<p>In the primordial tapestry of Asturian and Cantabrian mythology, the majestic Cuélebre emerged as a colossal winged serpent-dragon, a creature born from the very essence of the mystical landscapes. These enchanting beings, known as Culebre in Cantabrian and Cuélebre in Asturian, found their sanctuary within hidden caves, their abodes veiled from mortal gaze.</p><p>As the eons passed, the Cuélebre underwent a metamorphosis, their scales thickening into an impenetrable armor, and bat-like wings gracing their mighty forms. These alterations, borne from the inexorable flow of time, marked the creatures age and wisdom, transforming it into a guardian of treasures and a keeper of ethereal beings, the anjanas or xanas, held captive within its subterranean realm.</p><p>Though immortal, the Cuélebre seldom stirred from its lair, taking to the skies only to soar in search of sustenance, feeding upon cattle and unsuspecting souls. Legends whispered of a peculiar vulnerability; the mighty creature could be subdued by the offering of a red-hot stone or a loaf of bread filled with sharp pins. The magical spittle of the Cuélebre, a mysterious substance, was said to transmute into a stone possessing healing properties, capable of curing various afflictions.</p><p>Yet, as the ages pressed on, the Cuélebre faced an inevitable destiny. The weight of centuries compelled these ageless beings to bid farewell to their ancestral homes in Asturias, embarking on a majestic flight toward the Mar Cuajada—a paradisiacal haven nestled beyond the boundless sea.</p>',
        storySnippet:
            'In the primordial tapestry of Asturian and Cantabrian mythology, the majestic Cuélebre emerged as a colossal winged serpent-dragon, a creature born from the very essence of the mystical landscapes. These enchanting beings, known as Culebre in Cantabrian and Cuélebre in Asturian, found their sanctuary within hidden caves, their abodes veiled from mortal gaze.',
        lat: 42.5071,
        lng: -4.03549,
        uniqueCode: 'ES-001',
    },
    'ES-002': {
        name: 'Basajaun',
        illustration: Basajaun,
        stars: 5,
        origin: 'Spain',
        story: '<p>In the ageless heart of Basque mythology, a majestic being known as Basajaun unfolded from the very essence of the ancient woodlands. Born from the breath of the primordial forests and the murmurs of the winds, this colossal hominid emerged draped in a luxuriant cloak of hair, its cascading mane reaching down to its feet, marking it as a guardian of natures deepest mysteries.</p><p>As epochs passed, Basajaun traversed the sylvan realms of Gorbea and Irati, its movements imbued with a graceful might that defied its colossal size. In sacred groves, the creature toiled, crafting megaliths that stood as monuments to its profound mastery. Legends cast Basajaun in the role of benevolent guardian, overseeing flocks of livestock and generously imparting sacred knowledge to humanity—guiding the delicate arts of agriculture and the intricate dance of ironworking.</p><p>Far from harboring aggression, Basajaunak embraced a protective mantle. Their presence echoed through the woods with a harmonious bell shake, a signal of watchful guardianship. When tempests brewed or the ominous shadow of wolves approached, the Basajaun raised its resonant voice, a chorus of warning that reverberated through mountainous terrain.</p><p>In exchange for their tireless vigilance, the Basajaunak accepted a humble offering: a piece of bread, gathered discreetly while shepherds slumbered. Yet, within the nuanced mosaic of Basque folklore, the Basajaunak wore the mantle of enigmatic figures. They emerged not only as gentle stewards but also as formidable beings of colossal force, cautioning mortals against the unseen perils of the forest.</p><p>Within these ancient tales, the Basajaunak held not just the role of guardians but also custodians of profound wisdom. Legends spoke of their influence on the trickster San Martin Txiki, endowing him with the secrets of architecture, agriculture, blacksmithing, and the essence of settled life. San Martin Txiki became the conduit through which the sacred knowledge of the Basajaunak flowed, shaping the very foundations of human civilization with echoes of primordial teachings.</p>',
        storySnippet:
            'In the ageless heart of Basque mythology, a majestic being known as Basajaun unfolded from the very essence of the ancient woodlands. Born from the breath of the primordial forests and the murmurs of the winds, this colossal hominid emerged draped in a luxuriant cloak of hair, its cascading mane reaching down to its feet, marking it as a guardian of natures deepest mysteries.',
        lat: 37.9071,
        lng: -5.03549,
        uniqueCode: 'ES-002',
    },
    // France Entries
    'FR-001': {
        name: 'Biche de Bere',
        illustration: BicheDeBere,
        stars: 5,
        origin: 'France',
        story: '<p>In the depths of Breton legend, the Biche de Bere emerges as an enchanting creature, born from the magical threads that weave through the ancient forests. Its origins lie in the mystic energies that converged during a celestial alignment, where the moon cast a silver glow upon the woods. In that ephemeral moment, the spirits of the forest breathed life into a mystical deer, bestowing upon it a supernatural essence that transcended the boundaries between realms.</p><p>The Biche de Bere, a creature of extraordinary grace, possessed powers that mirrored the enchantment of its birth. It held the ability to conjure illusions that played upon the dappled shadows of the forest, captivating and bewildering unsuspecting hunters. With a mere swish of its ethereal tail, the Biche de Bere could transform the mundane into the magical, leading those who pursued it into a labyrinth of mesmerizing mirages.</p><p>This mystical hind played a dual role as both enchantress and guardian. Its illusions not only served to beguile hunters but also safeguarded the sacred sanctity of the mystical realm it called home. The Biche de Bere, with each step echoing the ancient rhythms of the forest, existed as a living testament to the delicate equilibrium between the tangible and the mystical.</p><p>As a guardian of the woods, the Biche de Beres powers remained intertwined with the forces of nature. Its ethereal presence, born from the convergence of celestial energies and arboreal spirits, left an indelible mark on Breton folklore. Though the mists of time may attempt to veil its tales, the echoes of the Biche de Bere linger, carried through the rustling leaves and whispered winds, ensuring that the boundary between the magical and the real remains forever blurred in the collective consciousness of Breton tradition.</p>',
        storySnippet:
            'In the depths of Breton legend, the Biche de Bere emerges as an enchanting creature, born from the magical threads that weave through the ancient forests. Its origins lie in the mystic energies that converged during a celestial alignment, where the moon cast a silver glow upon the woods. In that ephemeral moment, the spirits of the forest breathed life into a mystical deer, bestowing upon it a supernatural essence that transcended the boundaries between realms.',
        lat: 44.5071,
        lng: 6.03549,
        uniqueCode: 'FR-001',
    },
    'FR-002': {
        name: 'Lou Carcolh',
        illustration: LouCarcolh,
        stars: 5,
        origin: 'France',
        story: '<p>In the ancient tales of Occitan folklore, the majestic Lou Carcolh emerges as a mythical giant snail, a marvel born from the whispers of time and the fertile energy of the Occitan lands. This legendary creature traces its origins to a time when the essence of the earth intertwined with the magic of storm-laden skies, giving rise to a colossal being of awe-inspiring proportions.</p><p>Lou Carcolhs magnificence lay in its gargantuan shell, a spiraling structure that housed not only the echoes of bygone eras but also a mystical church. This sacred cathedral, intricately woven into the contours of the creatures dwelling, marked Lou Carcolh as a conduit between the terrestrial realm and the divine forces that shaped existence.</p><p>As storm clouds gathered and thunder roared, Lou Carcolh stirred from its ancient abode, moving with a grace that defied its colossal form. The creatures colossal shell, glistening with an ethereal sheen, bore witness to its symbiotic connection with the storms that summoned it. Each movement resonated with the hymns of celestial realms, a harmonious convergence of magic and earthbound majesty.</p><p>Lou Carcolh, beyond its physical enormity, possessed powers imbued with cosmic significance. With an intelligence beyond mortal comprehension, it emerged on stormy nights not merely to consume, but as an agent of divine justice. Guided by an otherworldly sense of righteousness, it sought out those deemed as sinners, its purpose extending beyond the mortal coil to maintain cosmic equilibrium.</p><p>Through the ages, Lou Carcolh became an integral part of Occitan heritage, a creature woven into the very fabric of regional lore. Though the storms that once summoned its presence have quieted, the echoes of its mythical existence persist. Lou Carcolh remains etched in the collective memory as a testament to an era when giant snails moved with ethereal grace, a symbol of divine justice in the luminescent wake of stormy nights.</p>',
        storySnippet:
            'In the ancient tales of Occitan folklore, the majestic Lou Carcolh emerges as a mythical giant snail, a marvel born from the whispers of time and the fertile energy of the Occitan lands. This legendary creature traces its origins to a time when the essence of the earth intertwined with the magic of storm-laden skies, giving rise to a colossal being of awe-inspiring proportions.',
        lat: 48.5071,
        lng: 5.03549,
        uniqueCode: 'FR-002',
    },
    // Italy Entries
    'IT-001': {
        name: 'Civetta',
        illustration: Civetta,
        stars: 5,
        origin: 'Italy',
        story: '<p>In the tapestry of Italian folklore, the Civetta unfolds as a mythical being, a diminutive owl-like creature whose origins are entwined with the echoes of antiquity. Born during a cosmic alignment that bathed the Italian landscape in ethereal light, the Civetta emerged from the confluence of mystical energies, a creation of fate woven into the fabric of bygone eras.</p><p>Feathers, as dark as the secrets it guarded, adorned the Civettas form, and its eyes shimmered with an otherworldly knowing. Despite its small stature, this mystical being wielded powers that transcended mortal comprehension. As a sentinel of the shadows, it navigated the unseen currents of destiny with an ancient wisdom that belied its size.</p><p>The Civettas haunting hoot, resonating through ancient woodlands, became an ominous prelude to fate. Villagers whispered of its ability to sense the imminent departure of a soul, as if the creature held a celestial key to the mystical threshold between life and the afterlife.</p><p>Perched upon windowsills of the ailing, the Civettas mournful gaze pierced the veil of mortality. Its presence, often accompanied by an eerie stillness in the air, struck both fear and awe into the hearts of those who crossed its path. The creatures hoots, heard in the hushed hours of the night, became an unsettling reminder of an unwelcome visitor from the realms beyond.</p><p>The Civetta, with its owl-like visage, transcended its physical form to become an otherworldly messenger. As the ages unfolded, it etched itself into the mythic lore of Italy, a spectral guardian whose existence lingered in the unseen corners of the world. In the quiet embrace of ancient landscapes, the Civetta stood as a testament to the profound mysteries woven into the very fabric of existence, where mystical beings held sway over the destinies of mortals.</p>',
        storySnippet:
            'In the tapestry of Italian folklore, the Civetta unfolds as a mythical being, a diminutive owl-like creature whose origins are entwined with the echoes of antiquity. Born during a cosmic alignment that bathed the Italian landscape in ethereal light, the Civetta emerged from the confluence of mystical energies, a creation of fate woven into the fabric of bygone eras.',
        lat: 44.5071,
        lng: 11.03549,
        uniqueCode: 'IT-001',
    },
    'IT-002': {
        name: 'Tarantella',
        illustration: Tarantella,
        stars: 5,
        origin: 'Italy',
        story: '<p>In the hallowed lore of Southern Italy, the Tarantella Spider, a creature of both enchantment and mystique, unfurls its tale from the ancient sands of Taranto. Born in an era when the very earth pulsated with arcane energies, this magical arachnid emerged as a manifestation of whispered incantations and moonlit shadows.</p><p>The Tarantella Spider, with legs aglow in silvery hues, bore the mark of its extraordinary origin. It was said to be woven from the threads of ancient spells, its appearance captivating in its ethereal beauty and haunting allure. A creature of the mystical realms, it held sway over those who dared to traverse its path.</p><p>The spiders potency lay in the venom that coursed through its delicate legs—a venom that transcended the physical realm. A mere touch could induce a trance-like state, an enchantment that ensnared the senses. Yet, it was the bite, a delicate dance of fangs, that became the catalyst for an extraordinary phenomenon that reverberated through time.</p><p>The victims, bitten by the Tarantella Spider, succumbed to an irresistible compulsion to dance. The rhythms of their movements mirrored the ancient pulse of the earth, an intricate dance that seemed to channel the very essence of the spiders magical venom. In the throes of this ecstatic madness, they twirled and swayed until sheer exhaustion overcame them, collapsing under the enchantments spell.</p><p>This mystical arachnid, with its intricate patterns and transcendent powers, wove itself into the cultural fabric of Southern Italy. It became a symbol of an era when the dance of the Tarantella Spider served as a conduit to unseen realms. Though the spider itself may be a creature of ancient legend, the echoes of its magical dance persist—a testament to the enduring mystique that once animated the lands of Taranto.</p>',
        storySnippet:
            'In the hallowed lore of Southern Italy, the Tarantella Spider, a creature of both enchantment and mystique, unfurls its tale from the ancient sands of Taranto. Born in an era when the very earth pulsated with arcane energies, this magical arachnid emerged as a manifestation of whispered incantations and moonlit shadows.',
        lat: 40.5071,
        lng: 16.03549,
        uniqueCode: 'IT-002',
    },
    // Germany Entries
    'DE-001': {
        name: 'Alp',
        illustration: Alp,
        stars: 5,
        origin: 'Germany',
        story: '<p>In the annals of Germanic folklore, the Alp emerges as a spectral entity, born of the ethereal mists that shroud the night. Its origins trace back to ancient times, when the veil between the mortal realm and the world of dreams was thin, and the forces of darkness held sway over the subconscious mind.</p><p>Legend tells of the Alps genesis, a manifestation of the deepest fears and anxieties that lurked within the human psyche. From the depths of the collective unconscious, it took shape, a twisted amalgamation of nightmares and malevolence. Cloaked in shadow and veiled in mystery, the Alp became an embodiment of terror that haunted the darkest corners of the mind.</p><p>With its spectral presence, the Alp wielded powers that transcended the boundaries of the physical world. Under the cover of night, it would slip into the realm of slumbering souls, its form ethereal and elusive. With a chilling whisper, it would settle upon the chests of its victims, ensnaring them in the grip of sleep paralysis and terror.</p><p>But the Alps influence extended beyond mere nightmares. It possessed the ability to shape dreams and manipulate the subconscious, weaving intricate tapestries of fear and despair. Its powers were vast and insidious, plunging those it targeted into a realm of darkness from which escape seemed impossible.</p><p>As the ages passed, the legend of the Alp grew, its spectral presence casting a long shadow over the dreams of the innocent. Though the veil between the waking world and the realm of dreams may have thickened with time, the echoes of the Alps malevolence linger still, a chilling reminder of the power that lurks in the depths of the night.</p>',
        storySnippet:
            'In the annals of Germanic folklore, the Alp emerges as a spectral entity, born of the ethereal mists that shroud the night. Its origins trace back to ancient times, when the veil between the mortal realm and the world of dreams was thin, and the forces of darkness held sway over the subconscious mind.',
        lat: 52.5071,
        lng: 13.53549,
        uniqueCode: 'DE-001',
    },
    'DE-002': {
        name: 'Nix',
        illustration: Nix,
        stars: 5,
        origin: 'Germany',
        story: '<p>In the ancient annals of Germanic folklore, the Nix emerges as a mystical water spirit, its origins woven into the very fabric of the rivers and lakes that crisscross the land. Born from the convergence of earth and water, the Nix embodies the enigmatic forces that govern the fluid realms of the aquatic world.</p><p>Legend whispers of the Nixs genesis, a tale steeped in the primordial depths where the mysteries of creation unfold. It is said that amidst the gentle lapping of waves and the shimmering dance of sunlight upon water, the Nix took form. Its essence, a fluid fusion of ethereal energies, bestowed upon it powers that transcended mortal understanding.</p><p>With its watery domain as its realm, the Nix moved with a grace that mirrored the ebb and flow of the tides. Its form, fluid and ever-changing, glided effortlessly beneath the surface, a phantom presence that danced upon the currents. From the depths, it beckoned to unsuspecting travelers, its voice a haunting melody that echoed across the waters, drawing them inexorably closer.</p><p>But the Nix was more than a mere guardian of the rivers and lakes—it possessed a darker aspect, a malevolence born of the depths. With a subtle manipulation of currents and tides, it ensnared its victims, drawing them into the watery embrace of its realm. There, amidst the shifting shadows and the dappled sunlight filtering through the waves, they met their fate.</p><p>Its powers were vast and insidious, its influence felt in the subtle sway of the currents and the gentle whisper of the breeze across the waters surface. Those who fell under its spell found themselves trapped in a realm of illusions, where reality merged with dream and the boundaries between the two grew indistinct.</p><p>As the ages passed, the legend of the Nix endured, its presence a reminder of the mysteries that lie hidden beneath the tranquil surface of the waters. Though the currents may change and the tides may shift, the memory of the Nix lingers still, a testament to the enduring power of myth and legend.</p>',
        storySnippet:
            'In the ancient annals of Germanic folklore, the Nix emerges as a mystical water spirit, its origins woven into the very fabric of the rivers and lakes that crisscross the land. Born from the convergence of earth and water, the Nix embodies the enigmatic forces that govern the fluid realms of the aquatic world.',
        lat: 50.5071,
        lng: 10.03549,
        uniqueCode: 'DE-002',
    },
    // Switzerland Entries
    'CH-001': {
        name: 'Tatzelwurm',
        illustration: Tatzelwurm,
        stars: 5,
        origin: 'Switzerland',
        story: '<p>In the shadowed recesses of Swiss and Alpine folklore, the Tatzelwurm emerges as a creature of mystery and intrigue, its origins veiled in the mists of time. Born from the rugged terrain and the ancient whispers of the mountains, this legendary being takes shape as a guardian of the alpine realms.</p><p>As the towering peaks rose from the earths embrace, so too did the Tatzelwurm emerge from the depths of the primordial landscape. Its form, a curious blend of serpentine grace and feline agility, captivated the imagination of those who traversed the rocky crags and verdant valleys of the Alps. With its sinuous body adorned in scales or fur, and its cat-like head crowned with eyes that gleamed with otherworldly wisdom, the Tatzelwurm became a symbol of the untamed wilderness.</p><p>Yet, it was not merely its physical form that set the Tatzelwurm apart, but the powers that lay dormant within its ancient essence. Legends spoke of its ability to command the very elements of nature, shaping the winds that swept through the mountain passes and the waters that cascaded down the rugged slopes. With a flick of its tail or a glance from its piercing gaze, the Tatzelwurm could summon storms from the heavens or calm the turbulent torrents of the alpine streams.</p><p>Throughout the ages, sightings of the Tatzelwurm have been whispered among the mountain folk, tales of fleeting encounters and eerie echoes in the silent valleys. Some spoke of its protective nature, guarding hidden treasures nestled within the rocky alcoves of the mountains. Others whispered of its wrath, unleashed upon those who dared to disturb the delicate balance of the natural world.</p><p>As time wove its tapestry through the rugged landscape, the Tatzelwurm retreated further into the realm of myth and legend, its presence a haunting reminder of the wild beauty and untamed spirit that roamed the Alpine wilderness. Though its origins may remain shrouded in mystery, the legacy of the Tatzelwurm endures as a symbol of the awe-inspiring wonders that await those who dare to explore the rugged heights of Switzerland.</p>',
        storySnippet:
            'In the shadowed recesses of Swiss and Alpine folklore, the Tatzelwurm emerges as a creature of mystery and intrigue, its origins veiled in the mists of time. Born from the rugged terrain and the ancient whispers of the mountains, this legendary being takes shape as a guardian of the alpine realms.',
        lat: 47.5071,
        lng: 8.53549,
        uniqueCode: 'CH-001',
    },
};
