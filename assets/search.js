// Search index for the guide, written by tools/build_docs_index.py. Do not edit.
window.INK_SEARCH = [
{
"p": "Connect Claude",
"h": "Connect Claude",
"u": "claude.html",
"t": "With the connection on, Claude (in the Claude desktop app) can build, check and export maps in Ink Hammer while you watch. Every change shows up live, and Ctrl+Z undoes it like your own edits. What you needThe Claude desktop app for Windows and a Claude plan that can use connectors. Setup takes about ten minutes, once."
},
{
"p": "Connect Claude",
"h": "1. Install uv",
"u": "claude.html#1-install-uv",
"t": "uv runs the small connector program that ships in Ink Hammer's mcp folder. It brings its own Python, so you do not need to install Python. Open PowerShell from the Start menu and paste: powershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\" When it finishes, close PowerShell. uv lands in C:\\Users\\you\\.local\\bin\\uv.exe."
},
{
"p": "Connect Claude",
"h": "2. Turn on the Local API",
"u": "claude.html#2-turn-on-the-local-api",
"t": "In Ink Hammer, tick Tools > Local API for Claude. It stays on between runs. It only listens on your own computer and needs a private token, which Ink Hammer writes for the connector."
},
{
"p": "Connect Claude",
"h": "3. Add Ink Hammer to Claude",
"u": "claude.html#3-add-ink-hammer-to-claude",
"t": "In the Claude desktop app open Settings > Developer > Edit Config. That opens claude_desktop_config.json. Fill in the two boxes below and copy the result into the file. Your Windows user name Your Ink Hammer folder Put this in the file, with your own Windows user name and Ink Hammer folder in the two paths (every backslash written twice). The guide in your browser (Help > User guide) can fill them in for you. { \"mcpServers\": { \"ink-hammer\": { \"command\": \"C:\\\\Users\\\\you\\\\.local\\\\bin\\\\uv.exe\", \"args\": [\"run\", \"--no-project\", \"--quiet\", \"C:\\\\Users\\\\you\\\\Documents\\\\Ink Hammer\\\\mcp\\\\ink_hammer_mcp."
},
{
"p": "Connect Claude",
"h": "4. Restart Claude",
"u": "claude.html#4-restart-claude",
"t": "Quit the Claude app fully (right-click its icon by the clock, then Quit) and open it again. Ink Hammer's tools now show under the connectors (tools) button in a new chat."
},
{
"p": "Connect Claude",
"h": "Try it",
"u": "claude.html#try-it",
"t": "With Ink Hammer open, ask Claude things like: \"Make a 30 by 20 map of a roadside tavern at dusk with a stable and a well.\" \"Add a campfire in the yard and turn the sun down to evening.\" \"Check the walls for gaps, then export gridless at 140 px and a Universal VTT file.\" Claude drafts; you refine by hand, then export. Claude can also take screenshots of the map to check its own work. Each Ink Hammer update brings a new connector in its mcp folder: quit and reopen Claude after updating so it loads the new tools (for example round rooms and object masks)."
},
{
"p": "Connect Claude",
"h": "If it does not work",
"u": "claude.html#if-it-does-not-work",
"t": "\"Ink Hammer isn't answering\"Ink Hammer is closed, or the Local API is off. Open Ink Hammer and tick Tools > Local API for Claude. \"Refused the token\"Untick and tick Tools > Local API for Claude again, then ask Claude to retry. Claude does not list the Ink Hammer toolsCheck the paths in the config: every backslash is written twice (\\\\).Check uv is where the config says: run uv --version in a new PowerShell window.Quit Claude fully and reopen it; closing the window is not enough. \"Lost Ink Hammer during ...\"Ink Hammer stopped mid-task. Restart it; your work is in the autosave if it was not saved"
},
{
"p": "Cliffs, dunes and hills",
"h": "Cliffs, dunes and hills",
"u": "cliffs.html",
"t": "Raised ground, drops, sand dunes and grassy hills are all one thing in Ink Hammer: a cliff line. Draw the top edge, pick a look, then tune it."
},
{
"p": "Cliffs, dunes and hills",
"h": "Drawing a cliff",
"u": "cliffs.html#draw",
"t": "Draw a line with the Pen (P), then tick Cliff in Properties, or pick Pen > Cliff before you draw. The line is the top edge. Face depth is how far the side reaches down from it. Close the shape for a plateau. With Inside is: Low ground a closed shape is a pit instead. The sun lights a cliff by its real shape: the sunny side is bright, ledges catch the light and a shadow falls where the rock meets the ground. Edit the line like any Pen line: drag points, pull curves, change the width of each point. In line edit the orange foot points set where the face meets the ground."
},
{
"p": "Cliffs, dunes and hills",
"h": "Looks",
"u": "cliffs.html#looks",
"t": "Properties > Cliff > Look sets a whole style in one go. Every setting stays yours to change afterwards. Each picture is a closed outcrop on grass with the afternoon sun from the top left. New cliff: what a new cliff starts with Sand dune: sand all the way down, Round top on Grassy hill: no face: it raises the ground (only its shadow shows here) Earth slope Painted dark rock Grey slabs Sandstone strata Earth bank Mountain blocks Snowy rock"
},
{
"p": "Cliffs, dunes and hills",
"h": "Breakup: ground on the ledges New in 0.9.24",
"u": "cliffs.html#breakup",
"t": "The ground on top (grass, sand, snow) breaks onto the first ledges in patches and thins out down the face, so a cliff top blends into its rock instead of ending on a hard line. The ground at the foot can creep up the lowest ledges the same way. Properties > Breakup: ground on the ledges: Top ground and Foot ground (0 is off), Reach down and Reach up (how far along the face), Patch size. It uses the ground that is there. Pick a Top texture or Foot texture to use another. The rock looks start with a little top breakup already on. Off: the rock ends on a clean line Top ground 1: grass on the uppe"
},
{
"p": "Cliffs, dunes and hills",
"h": "Round top for dunes and banks New in 0.9.24",
"u": "cliffs.html#round-top",
"t": "For a side made of the same stuff as the top (sand, earth, turf), Round top rolls the side over from the top like a dome, so a dune flows into its top with no edge. It is in the Sides: texture section. 0 is a straight bank, 1 a full dome. The Sand dune look starts with it on. Round top 0: a straight bank Round top 1: rolls into the top"
},
{
"p": "Cliffs, dunes and hills",
"h": "Soft slopes, dunes and hills",
"u": "cliffs.html#soft",
"t": "Hills: Style > Soft slope (or the Grassy hill look) draws no face at all. The shape only raises the ground, so your ground layers show on the slope and the sun shades it. With Low ground it makes a hollow. Dunes and banks: Style > Texture with a sand or soil texture in Sides, Shadow at 0, and Fade top and Fade foot to blend the side into the top and the ground. Add Round top for a rolling dune. Keep a hill low (Height 4 to 8 ft). At the default 15 ft a hill throws a wall's shadow."
},
{
"p": "Cliffs, dunes and hills",
"h": "Opacity and tint New in 0.9.24",
"u": "cliffs.html#look",
"t": "Cliffs and the spills over them take Opacity and Tint in Properties > Look, like props. Use tint to match a cliff to a palette (a cold blue for a night map, a red rock for a desert). Opacity fades the whole cliff."
},
{
"p": "Cliffs, dunes and hills",
"h": "Props on cliffs and slopes",
"u": "cliffs.html#props",
"t": "A prop on a clifftop edge stands on the top when most of it is over the top, and below when most of it is over the drop. In Properties a prop on a slope can Stand, Hug the slope or be Set into the face. A prop lying across the foot of a cliff sits over it cleanly, with no dark band cut across it."
},
{
"p": "Cliffs, dunes and hills",
"h": "Submerge: sink a prop into the ground New in 0.9.24",
"u": "cliffs.html#submerge",
"t": "Half-buried statues, a boulder sunk into sand, a log in mud: Properties > Submerge fades a prop into the ground from one side, with a ragged soft edge and a touch of dirt along the line. Its shadow shrinks with it. Side: Bottom, Top, Left, Right or All round. How far: how much of the picture is under the ground. Soft edge, Ragged edge and Dirt shape the line where it meets the ground. Off: lying on the sand Bottom, How far 0.4: sunk into it"
},
{
"p": "Cliffs, dunes and hills",
"h": "Tips",
"u": "cliffs.html#tips",
"t": "Keep the top's soft edge smaller than the face depth, or the top texture spreads onto the ground below. Overlapping cliff shapes meet as solids. A dark patch that comes and goes on a clifftop as you edit is usually a tall prop's shadow: move the prop or lower its height."
},
{
"p": "Exporting for play",
"h": "Exporting for play",
"u": "export.html",
"t": "File > Export (Ctrl+E) writes everything a table needs in one run: pictures for print or screen, and a file a virtual tabletop can read with the walls, doors and lights."
},
{
"p": "Exporting for play",
"h": "The outputs",
"u": "export.html#the-outputs",
"t": "OutputUse it for GridlessVirtual tabletops that draw their own grid. GriddedPrinting, or tabletops without a grid. Roll20A JPG at Roll20's 70 px per square, no grid. Master PNGA lossless copy to keep or edit elsewhere. Universal VTTA .dd2vtt file: the picture plus walls, doors, windows and lights. Book (grayscale PNG)A black and white picture for a printed book, with the look set in Book view (top bar): brightness, contrast and midtones. 74 px per square by default. Each output has its own size in pixels per square. Higher is sharper and bigger on disk."
},
{
"p": "Exporting for play",
"h": "Before you export: Check map",
"u": "export.html#check",
"t": "Tools > Check map lists mistakes that are easy to miss: missing art, props off the map edge or hidden under a building's floor, two copies of a prop on top of each other, props drawn far bigger or smaller than usual, glows that blow out to white, lamps right beside a tall prop (they throw a hard wedge of shadow), lamps off the map and empty layers. Its lighting pass flags lamps with shadows off, lamps above a roof or inside a prop, and furniture that casts no shadow; it also lists art with no size in its pack. Click a line to select the thing and go there. It changes nothing; fix what matters "
},
{
"p": "Exporting for play",
"h": "Into a virtual tabletop",
"u": "export.html#into-a-virtual-tabletop",
"t": "The .dd2vtt file is the Universal VTT format. It loads in: Foundry VTT with the Universal Battlemap Importer module. Owlbear Rodeo, Arkenforge, Fantasy Grounds and most tools that take Dungeondraft exports. Before exporting, turn on Walls view (top bar) to check what the tabletop will get: walls, doors, windows and openings in colour. The export also writes a short report of problems it found (gaps in walls, doors off a wall). Windows in the VTT file: as closed doors (block sight until opened) or as gaps. Image inside the VTT file: PNG works everywhere; WebP is much smaller if your tabletop ta"
},
{
"p": "Exporting for play",
"h": "Other settings",
"u": "export.html#other-settings",
"t": "Maps to export: only this map, or this map with its levels above and below and the maps beside it. Overview of how they join adds one picture of them all laid out together. Scenes: every scene (one set each) or only the current one. Shadow and water detail: High and Max render sharper shadows and water for the export. Labels: a DM copy with labels, a clean player copy, or both in their own folders. Grid: line colour, opacity and width for the gridded copy. Watermarked copy: a smaller copy with your logo or text for posting online. Exports always render everythingThe speed switches only change "
},
{
"p": "Exporting for play",
"h": "Package a map",
"u": "export.html#package-a-map",
"t": "File > Package map with its assets writes a folder with the map and every piece of art it uses. Open the .anvilmap inside it on any computer and its art joins the library on its own."
},
{
"p": "Your first map",
"h": "Your first map",
"u": "first-map.html",
"t": "A roadside tavern, from a blank map to files you can play on. Tick each step off as you go; this page remembers where you got to."
},
{
"p": "Your first map",
"h": "Make the map",
"u": "first-map.html#make-the-map",
"t": "On the start screen click New map... (or File > New map, Ctrl+N). Name it, pick Medium 30x20 and click Create map. A new map comes with a stack of empty layers ready to use: Floor, Paths, Floor Decals, Objects, Walls, Canopy and Above Walls."
},
{
"p": "Your first map",
"h": "Paint the ground",
"u": "first-map.html#paint-the-ground",
"t": "Pick the Paint tool (B) and click the first button under Add a paint layer (New ground layer). Choose a grass texture for it, then drag over the map to paint. Left-drag shows the texture, right-drag hides it. [ and ] change the brush size. Add a second ground layer (dirt or cobbles) for a road and the yard. Each ground layer holds one texture, so you can repaint one without touching the other."
},
{
"p": "Your first map",
"h": "Build the tavern",
"u": "first-map.html#build-the-tavern",
"t": "Pick Build (U) and drag a rectangle for the main hall. Walls, floor and ink lines appear on their own. Drag another rectangle touching the first to add a kitchen; the shared wall becomes a thin inner wall. Draw a rectangle inside a room to split it into two. Use the doors mode in the bar over the map, pick a door, and click a wall. It cuts its own opening."
},
{
"p": "Your first map",
"h": "Furnish it",
"u": "first-map.html#furnish-it",
"t": "In the Assets panel at the bottom, type table in Search assets. Click a table, then click inside the hall. Hold Shift to place several. R turns the selection 15 degrees, F mirrors it, Ctrl+drag drags out a copy. Furniture goes on the Furniture layer and small things on Props, so you can hide or lock them separately."
},
{
"p": "Your first map",
"h": "Add a roof",
"u": "first-map.html#add-a-roof",
"t": "Select the building and click Add a roof in Properties, or use the Roofs tool to drag one out. Shape it in Edit lines: drag the ridge, make an end a gable with a right-click. For play you usually want to see inside: click the eye on the Roofs layer to hide it. A hidden roof still keeps the sun out, so the inside stays shaded."
},
{
"p": "Your first map",
"h": "Light it",
"u": "first-map.html#light-it",
"t": "Pick Lights (L). Click Dusk under Scene darkness, then click Fireplace or Candle under New light and click the map where it goes. Lamps follow the layer orderA lamp lights its own layer and everything below it. New lamps go on a Lights layer at the top, so they light everything. Drag that layer under the roofs if the lamps should not light the roof tops. See Light and layer order."
},
{
"p": "Your first map",
"h": "Label it (optional)",
"u": "first-map.html#label-it-optional",
"t": "Pick Labels (N), click the map and type. Pull an arrow out of the box and point it at the trapdoor. Labels can go into your exports or stay in the editor only."
},
{
"p": "Your first map",
"h": "Save and export",
"u": "first-map.html#save-and-export",
"t": "Save with Ctrl+S. Then File > Export (Ctrl+E), keep the ticked outputs and click Export. You get a gridless and a gridded picture, a Roll20 picture and a Universal VTT file with the walls, doors and lights. Details in Exporting for play. Let Claude draft itWith the Claude connection on, you can ask Claude for \"a two-room roadside tavern at dusk with a stable\", watch it build the map live, then refine it by hand. See Connect Claude."
},
{
"p": "Install and first launch",
"h": "Install and first launch",
"u": "getting-started.html",
"t": "Ink Hammer runs from its own folder. There is no installer: unzip it and start it. Windows will warn you the first time. This is expected. Ink Hammer has no installer and changes nothing on your system: you unzip the folder and run Ink Hammer.exe. Because this beta is not code-signed yet, Windows SmartScreen shows a blue box saying Windows protected your PC and \"unknown publisher\". Click More info, then Run anyway. You only need to do this once. Some antivirus programs may also ask about it; allow Ink Hammer.exe from the folder you unzipped. Only run a copy you downloaded from the official sto"
},
{
"p": "Install and first launch",
"h": "Install",
"u": "getting-started.html#install",
"t": "Download three files from the store page: the Ink Hammer app, Anvil Pack Core (textures, walls, paths, doors) and Anvil Pack Items (props and furniture). Unzip all three to the same place you keep, for example Documents. Each zip has an Ink Hammer folder inside, so they end up in one Ink Hammer folder (the packs go into Ink Hammer\\Modules). Choose Replace if Windows asks. Open the folder and double-click Ink Hammer.exe. If Windows shows Windows protected your PC, click More info, then Run anyway. This appears because the beta is not code-signed yet. If a pack is missing, Ink Hammer says so whe"
},
{
"p": "Install and first launch",
"h": "Updating",
"u": "getting-started.html#updating",
"t": "Help > Check for updates... says whether a newer version is out and opens the download page. New in 0.9.24 Unzip the new app zip over your Ink Hammer folder and choose Replace. The art packs and your own imports stay as they are. Download a pack again only when the release notes say it changed."
},
{
"p": "Install and first launch",
"h": "What is in the folder",
"u": "getting-started.html#what-is-in-the-folder",
"t": "Folder or fileWhat it holds Ink Hammer.exeThe program. ModulesThe art packs (anvilnink.pack-core, anvilnink.pack-items) and the built-in tool plugins. Turn any of them off in File > Modules... Anvil PackYour own imports, saved prefabs and wall or path sets. Images you copy in here show up the next time you start Ink Hammer (or after Rescan). mapsWhere new maps are saved unless you pick another folder. exportsWhere exports go unless you pick another folder. mcpThe connector that lets Claude work in Ink Hammer (see Connect Claude). docsThis guide. Open docs\\index.html any time, or use Help > Use"
},
{
"p": "Install and first launch",
"h": "What you need",
"u": "getting-started.html#what-you-need",
"t": "Windows 10 or 11 (64-bit). A graphics card with Vulkan support (most cards from the last ten years; DirectX 12 is used if Vulkan is missing). Water and lighting are drawn on the graphics card, so a dedicated card is smoothest. On a laptop with built-in graphics, see The editor feels slow."
},
{
"p": "Install and first launch",
"h": "The start screen",
"u": "getting-started.html#the-start-screen",
"t": "Ink Hammer opens on the start screen. Click the numbers to see what each part does. New mapOpens the new map form: name, folder, size in squares and grid look. Open mapOpens any .anvilmap file on your computer. Asset ManagerBrowse, tag and import art before you start a map. User guideOpens this guide in your browser. It is also in Help > User guide. Continue to the editorGoes to the editor with an empty map, or the map you had open. Recent mapsYour last maps with a small picture and their size. Double-click one to open it. Maps joined as floors or side maps show as one card (the main map, with"
},
{
"p": "Install and first launch",
"h": "Make a new map",
"u": "getting-started.html#make-a-new-map",
"t": "The new map form on the start screen. Name and Save in: the map is saved straight away, so it has a file from the start. Presets set common sizes. One square is 256 pixels in the map, the same scale Dungeondraft uses. Feet per square is usually 5. It sets how long shadows are and how heights read. Grid lines sets whether the grid shows, how strong it is and its colour. You can change all of it later in File > Settings. Click Create map and the editor opens. Next: Your first map."
},
{
"p": "Install and first launch",
"h": "Saving and lost work",
"u": "getting-started.html#saving-and-lost-work",
"t": "Ctrl+S saves. The previous version is kept next to it as a .bak file. Ink Hammer also autosaves a separate copy every 2 minutes. It never overwrites your map file. If Ink Hammer closes without saving (a crash or a power cut), the next start shows Recover unsaved work. Recover opens the autosaved copy; save it to keep it. Discard throws the copy away. Moving a map to another computerUse File > Package map with its assets. It writes one folder with the map and every piece of art it uses, so it opens complete anywhere."
},
{
"p": "Welcome",
"h": "Ink Hammer user guide",
"u": "index.html",
"t": "Build battle maps for tabletop games: paint the ground, draw buildings, dress them with art, light them, and export for print or any virtual tabletop."
},
{
"p": "Welcome",
"h": "Start here",
"u": "index.html#start-here",
"t": "Step 1Install and first launchUnzip, run Ink Hammer.exe, and find your way around the start screen. Step 2Your first mapA tavern from blank map to finished export, one tool at a time. Step 3The main windowClick around a screenshot of the editor to learn every panel."
},
{
"p": "Welcome",
"h": "Look things up",
"u": "index.html#look-things-up",
"t": "The toolsPaint, Pen, Height, Place, Build, Roofs, Lights, Walls, Labels and Grid. LayersLayer kinds, order, and why order decides what a lamp lights. Cliffs, dunes and hillsEvery cliff look, breakup on the ledges, rolling dunes, sinking props into the ground. Walls and buildingsEvery wall style, walls off the ground, flipping, roof blends. Water and waterfallsEvery water look, rivers that flow, the sea, waterfalls and spills. Light and shadowDaylight, the sun, lamps, shadows and the speed switches. Exporting for playGridless, gridded, Roll20 and Universal VTT files. Connect ClaudeLet Claude dr"
},
{
"p": "Welcome",
"h": "How Ink Hammer thinks",
"u": "index.html#how-ink-hammer-thinks",
"t": "Everything is a layer. Ground, water, walls, furniture, roofs, lights and mist each sit on a layer, and the order of layers is the order things are drawn. A lamp lights its own layer and everything under it. Buildings are made from rooms. Draw the rooms with the Build tool and the walls, floors and doors are made for you. Heights are real. Props, walls, roofs and terrain have heights in feet, so the sun and lamps cast shadows the right length. Nothing is lost. Every edit can be undone with Ctrl+Z, and your map is autosaved every 2 minutes. TipPress / anywhere in this guide to search it."
},
{
"p": "The main window",
"h": "The main window",
"u": "interface.html",
"t": "The map fills the window and the panels float around it. Click a number, or use the arrow keys, to step through every part. MenusFile (new, open, save, export, package, settings), Edit (undo, copy, paste, copy settings), View (fit, grid, size references, fast editing), Window (show or hide panels), Tools (Claude connection, Asset Manager, prefab builder, specialized tools), Plugins and Help. Map name and scenesThe open map, then its scenes. Scenes are versions of the same map (day and night, before and after the battle). Click + to add one. Tool railThe tools, top to bottom in the order you us"
},
{
"p": "The main window",
"h": "Panels",
"u": "interface.html#panels",
"t": "Panels dock like Photoshop's: along the left, along the right and along the bottom, stacked, or floating over the map. Move a panel: press on any empty part of its title bar and drag. Near the left or right column or the bottom, a blue box shows where it will go and the panels there make room when you let go. Let go over the map and it floats. Resize: edges light up orange under the mouse. Drag the line between two docked panels to share the room differently, a column's edge to make it wider or narrower, the top of the bottom panels to make them taller. A panel's own height: drag the outer top"
},
{
"p": "The main window",
"h": "Levels",
"u": "interface.html#levels",
"t": "+ Level above and + Level below (top right of the map) make a floor above or below this one, each its own map in the same folder. The set button next to the file name (Upper floor (3 maps)) opens any of them. Wherever a level has no ground painted (or a hole in a building's floor), the level below shows through, lined up with it at 100% scale. Level look... sets its blur, haze, scale and shift, or a Background image of your own (a sea, clouds, a city far below) instead. The picture of a level is taken when you save it or leave it. After changing a lower level, save it so the levels above show "
},
{
"p": "The main window",
"h": "Moving around the map",
"u": "interface.html#moving-around-the-map",
"t": "To do thisDo this PanMiddle mouse drag, or hold Space and drag ZoomMouse wheel, or the - and + in the status bar See the whole mapF1 or Fit in the status bar Get out of anythingEsc cancels what you are doing, then goes back to the Select tool"
},
{
"p": "The main window",
"h": "Selecting and changing things",
"u": "interface.html#selecting-and-changing-things",
"t": "With the Select tool (V): Click to select, drag to move. Drag a corner to scale, drag just outside a corner to turn. Drag on an empty part of the map to draw a box round several things. Shift+click adds or removes one. Alt+click picks the next thing in a stack. Ctrl+drag drags out a copy. Ctrl+D duplicates. R and Shift+R turn 15 degrees, F mirrors, [ and ] scale, arrow keys nudge. Right-click anything for its menu: tint, flip, turn 90 degrees, bring to front, move to a layer, group into a layer, add a mask, link, make a prefab, distort, hide, lock, delete. Buildings and roofs have one too, wit"
},
{
"p": "Layers",
"h": "Layers",
"u": "layers.html",
"t": "Everything on a map sits on a layer. The order of the layers is the order things are drawn, and it also decides what each lamp lights."
},
{
"p": "Layers",
"h": "The Layers panel",
"u": "layers.html#the-layers-panel",
"t": "The top of the list is drawn last, over everything else. Drag a layer up or down to reorder it. Drag objects between layers too. The eye hides a layer, the lock stops it being changed. The number after a name is how many things it holds. Double-click a name to rename it. Right-click for copy, duplicate, move into a group, select everything on it, and new layers of each kind. Click the arrow on a layer to list what is on it; click a row to pick that one thing. The buttons along the bottom add a layer, a mask, and ground, water, void and mist layers. Roof and rain layers come from the row of but"
},
{
"p": "Layers",
"h": "Dragging rows",
"u": "layers.html#dragging-rows",
"t": "While you drag, a blue line shows where the row will land, indented to the level it lands on. A blue box means it goes inside that group (or layer). The top half of a row drops above it, the bottom half below. Passing over a group does not drop into it: rest on the middle of its row for a moment and the blue box appears. Rest on a closed group (or a layer's list of objects) for about a second and a half and it opens, so you can drop the row in among what it holds. Just under an open group's title is its first row. Below the last row of an open group, move the pointer left to drop at the group'"
},
{
"p": "Layers",
"h": "Working with several at once",
"u": "layers.html#working-with-several-at-once",
"t": "Ctrl+click adds a layer or object to the pick, or takes it out. Shift+click picks every row between the last click and this one. Ctrl+A picks every layer in the list, Esc lets go. Drag any picked row and they all move together, in the same order. Drop on the middle of a group to put them inside it. The eye, the lock, Copy, Duplicate, Delete and the moves all work on every picked layer. Keys while the panel is in use: Alt+Up / Alt+Down move, Alt+Right into the group above, Alt+Left out of its group, Ctrl+G group the picked layers, Ctrl+Shift+G ungroup, Ctrl+D duplicate, Ctrl+C / Ctrl+V copy and"
},
{
"p": "Layers",
"h": "Kinds of layer",
"u": "layers.html#kinds-of-layer",
"t": "KindWhat it is for LayerObjects: furniture, props, trees, decals, walls, lights and labels. GroupA folder of layers (the new map's Objects group holds Props and Furniture). Hide, lock or fade the whole group at once. GroundOne painted texture (grass, dirt, flagstones). Stack several and paint where each shows. WaterPainted water with depth, flow around rocks, foam and ripples. RoofPainted roof cover that keeps the sun and rain off, even while hidden. (For drawn roofs with slopes, use the Roofs tool.) VoidThe darkness around a cave. What it covers fades into nothing, and the open area is cave f"
},
{
"p": "Layers",
"h": "Order matters",
"u": "layers.html#order",
"t": "Layers draw from the bottom of the list up. Three things follow from that: What covers what. Canopy over Walls hides the wall tops under the trees. What a lamp lights. A lamp lights its own layer and every layer under it, never the layers above it. Details in Light and layer order. Where mist and rain sit. Mist at the top of the list drifts over everything; low in the list it shows only where the ground is cleared."
},
{
"p": "Layers",
"h": "Opacity and blend modes",
"u": "layers.html#opacity-and-blend-modes",
"t": "Object, group, ground, roof and mist layers, and most objects, have an opacity and a blend mode (Multiply, Screen, Overlay and nine more) in Properties. Water, void and rain layers have no blend; cliffs, waterfalls, spills, fire and buildings have none either, and drawn roofs offer Normal, Multiply, Add and Subtract (see Roof blend). Every layer panel ends with the same Layer block: name, opacity, blend, tint, lit by the sun, scenes and mask. A half-transparent group fades as one picture, so the things inside it do not show through each other. Ground layers take a blend mode too, on the layer "
},
{
"p": "Layers",
"h": "Layer masks",
"u": "layers.html#masks",
"t": "A mask hides part of an object layer or a group without deleting anything, like a layer mask in Photoshop: half a statue buried in sand, a prop tucked under a cave wall, a rug cut off at a doorway, trees fading out at the map edge. White on the mask shows, black hides, grey is see-through."
},
{
"p": "Layers",
"h": "Adding a mask",
"u": "layers.html#adding-a-mask",
"t": "Pick the layer or group and click Mask at the bottom of the Layers panel (next to New group). The mask starts showing everything and the Paint tool opens on it. Or right-click the layer > Add mask, or Properties > Mask > Add mask (starts with everything showing). To start with everything hidden, use the layer's right-click menu. Masks go on object layers and groups. Ground, water and void layers are already painted, so to mask them, put them in a group and mask the group."
},
{
"p": "Layers",
"h": "Masking single objects or a few together",
"u": "layers.html#masking-single-objects-or-a-few-together",
"t": "Right-click an object, a wall piece or a building > Add mask to this object (or select it and click Mask). It moves onto its own masked layer just above its old one, with the same settings and a linked mask that follows it. The mask starts as a copy of the old layer's mask, so nothing changes until you paint. Good for blending one wall into the wall behind it. Several selected: Add mask to these gives them one shared mask. Group into a layer puts them on one new layer without a mask; then click Mask (with nothing selected on the map) to mask the whole group. The moved pieces draw over the rest"
},
{
"p": "Layers",
"h": "The thumbnails",
"u": "layers.html#the-thumbnails",
"t": "A masked layer shows two thumbnails on its row with a chain between them, as in Photoshop: Layer thumbnail: click it to work on the layer's objects (move, place, select). Chain: gold means Linked. Click it to link or unlink. Mask thumbnail: a small black and white picture of the mask. Click it to paint the mask. A gold frame shows which one you are working on. Alt+click the mask thumbnail to see the mask in black and white over the map. Shift+click turns the mask off and on (an off mask shows a red cross). Drag the mask thumbnail onto another layer or group to move the mask there. Hold Ctrl as"
},
{
"p": "Layers",
"h": "Painting the mask",
"u": "layers.html#painting-the-mask",
"t": "While you paint a mask, the map shows red wherever the mask hides, so you can see exactly what is cut. Left-drag shows, right-drag hides. Soft brushes give soft edges; a hard brush gives a clean cut. The Paint panel adds Show all, Hide all, Invert, Black and white (or back to the red overlay) and Back to the layer."
},
{
"p": "Layers",
"h": "How masks behave",
"u": "layers.html#how-masks-behave",
"t": "Linked (on by default): move, turn or scale everything on the layer together and the mask goes with it. Moving only some things leaves the mask where it is. On a group, select the group to move all of it with its mask. Unlink to move things under a mask that stays put. Masks stack: a mask on a group and masks on layers inside it all apply. Hidden parts cast no sun shadow, block no lamp light (props, walls and buildings) and make no shore in water, so a half-buried rock casts half a shadow and a buried stretch of wall lets lamp light through. Masks work on layers with a blend mode (Multiply, Sc"
},
{
"p": "Layers",
"h": "Per-layer switches",
"u": "layers.html#per-layer-switches",
"t": "Pick a layer and Properties shows its switches: Lit by the sun and Casts sun shadows. Layers named Paths, Floor, Decals, Rug, Water, Ground or Light start with Casts sun shadows off (the box says so): what is on them lies flat. Tick it to make them cast. An object there with a Height or Lift is still shaded at that height. Affects water: off for trees over a stream, so their trunks make no ripples. A single object can differ from its layer: pick it, then set Affects water under Sun in Properties (Same as layer, Yes or No). It only shows when the map has water. Sailing: for a ship at sea. Pick "
},
{
"p": "Light and shadow",
"h": "Light and shadow",
"u": "lighting.html",
"t": "Daylight sets how bright the shadows are, the sun or moon throws shadows from everything with a height, and lamps light what is under them in the layer stack."
},
{
"p": "Light and shadow",
"h": "Scene darkness",
"u": "lighting.html#scene-darkness",
"t": "In the Lights tool (L), Day, Dusk, Night and Cave set the whole scene at once. Daylight is the light that reaches everywhere, shadows included. 100% means shadows are only as dark as the sun's extra light makes them. Ambient tint colours that light: blue for night, warm for a sunset. Daylight can go down to 0%: everything outside your lamps is black and the lamps keep their full colour (3D lighting). Overall brightness, Overall contrast, Overall saturation and Colour tone (cool to warm) grade the whole finished map; labels stay as drawn. Lamp exposure brightens or dims every lamp at once."
},
{
"p": "Light and shadow",
"h": "The sun or moon",
"u": "lighting.html#the-sun-or-moon",
"t": "From is the direction it shines from, Elevation how high it is. A low sun throws long shadows: at 14 degrees a shadow is about four times as long as the thing is tall. Intensity and Color set its strength and colour. Shadow colour and Shadow depth set how dark and what colour every shadow is. Cast shadows turns sun shadows on for this map. Shadow fade and Fade over: long shadows are darkest at the foot of what casts them and lighten toward the tip, as in life. 0 gives even shadows. Soft edges: shadow edges blur the further they reach from the caster. 0 keeps them crisp. Lamp shadow fade and La"
},
{
"p": "Light and shadow",
"h": "Lamps",
"u": "lighting.html#lamps",
"t": "Pick a preset under New light (torch, candle, campfire, brazier, magic, spotlight, floodlight, window, fireplace, moonlight) and click the map. Each preset has a sensible height: a candle 3 ft, a torch 7 ft. Drag a lamp to move it; drag its handles for reach, falloff, aim and width. Lamps cast shadows from walls and from every prop's outline. A lamp above a crate is not blocked by it. A lamp with Shadows off is a clean area light: only walls and buildings stop it. Tick Through walls as well and nothing stops it, for an overall fill light. Stays on its level: the light reaches only the ground i"
},
{
"p": "Light and shadow",
"h": "3D lighting",
"u": "lighting.html#light-3d",
"t": "Lamps and the sun are lit and shadowed by a hidden 3D copy of the map: walls are solid with real door and window holes, props stand at their real height and lift, cliffs and terrain have their real slopes. Shadows soften as they widen, buildings with roofs only let the sun in through their doors and windows, and exports carry the same look. Render quality (top bar, and Settings > Speed), 10% to 100%: low settings give chunkier, softer shadows and much faster lighting while you work. Exports always render at full quality. 3D lighting in the Lights tool, under Master light (sun or moon), turns i"
},
{
"p": "Light and shadow",
"h": "Light and layer order",
"u": "lighting.html#layer-order",
"t": "With 3D lighting, height decides what a lamp lights inside a room: a lamp on a table lights the floor, a chandelier lights the table. Layer order still keeps lamps under roofs and high mist: those stay unlit by lamps under them. With classic 2D lighting a lamp lights its own layer and every layer under it, never the layers above it. In this stack the lamps sit under the roofs, so the roof tops stay dark while the floor and furniture are lit. Drag the Lights layer above Roofs and the lamps light the roofs too. Bounce light (light spilling off lit surfaces) follows the top lamp: layers above eve"
},
{
"p": "Light and shadow",
"h": "Contact shade and bounce light",
"u": "lighting.html#contact-shade-and-bounce-light",
"t": "Ambient occlusion (contact shade) darkens where things meet the ground and in tight corners. Strength and Reach in the Lights panel. Bounce light lifts shadows next to a lamp's pool or a sunlit wall and tints them with its colour."
},
{
"p": "Light and shadow",
"h": "Speed switches",
"u": "lighting.html#speed-switches",
"t": "The row of switches at the top right of the window turns heavy effects off while you work: sun shadows, lamp shadows, contact shade, animation, draft detail and the void, then the render scale. A lit switch is on. No sun shadows?Check the first switch (the sun). When it is off, no sun shadows show in the editor, even with Cast shadows ticked. The Lights panel says so and has a Show sun shadows button. Exports always have every effect. View > Fast editing turns all of them off and drops the render scale to 50%. View > Full quality turns them back on. The switches are saved on your computer, not"
},
{
"p": "Keyboard shortcuts",
"h": "Keyboard shortcuts",
"u": "shortcuts.html",
"t": "Type to filter the list. Hovering any tool or button in Ink Hammer also shows its shortcut. KeysWhat it does VSelect tool BPaint tool PPen tool (paths, walls, cliffs, stairs) THeight tool (terrain) UBuild tool (rooms and buildings) LLights tool WWalls tool (walls, doors, windows) NLabels tool GGrid tool (turn and resize the snap grid) EscCancel what you are doing, then back to Select Ctrl+ZUndo Ctrl+Y or Ctrl+Shift+ZRedo Ctrl+NNew map Ctrl+OOpen a map Ctrl+SSave Ctrl+Shift+SSave as Ctrl+EExport Ctrl+,Settings Ctrl+QQuit Ctrl+C / X / VCopy, cut, paste (works between maps) Ctrl+Shift+C / VCopy a"
},
{
"p": "Keyboard shortcuts",
"h": "In the Layers panel",
"u": "shortcuts.html#layers-panel",
"t": "These work while the Layers panel is in use and a layer (not an object) is picked. KeyWhat it does Ctrl+clickAdd a layer or object to the pick, or take it out Shift+clickPick every row between the last click and this one Ctrl+A / EscPick every layer / let go of the pick Alt+Up / DownMove the picked layers up or down Alt+Right / LeftInto the group above / out of its group Ctrl+G / Ctrl+Shift+GGroup the picked layers / ungroup Ctrl+DDuplicate the picked layers Ctrl+C / VCopy the picked layers / paste them above the current one F2Rename DelDelete the picked layers"
},
{
"p": "The tools",
"h": "The tools",
"u": "tools.html",
"t": "The tool rail on the left, in the order you usually build a map. Pick a tool below to see its panel and what it does. Click any picture to see it full size."
},
{
"p": "The tools",
"h": "Select",
"u": "tools.html#select",
"t": "Click, move, scale and turn anything on the map. This is where you end up after placing something, and Esc always brings you back here. Drag a corner to scale, just outside a corner to turn. Arrow keys nudge (Shift moves further). Drag on empty map to box-select: the box picks everything it touches, by its real shape (part of a road or a wall is enough). Ctrl+drag drags out a copy. Right-click for the object menu: tint, flip, turn 90 degrees, front or back, move to layer, link (Ctrl+G), make a prefab, distort, hide (H), lock (Ctrl+L). Properties (right) shows the settings of what you picked, i"
},
{
"p": "The tools",
"h": "Paint",
"u": "tools.html#paint",
"t": "Paints ground textures, water, roofs and the void (the darkness around a cave) onto the current layer. Pick a ground, water or void layer in Layers first; the panel changes with the layer kind. Brush size, strength, softness and a rough edge that follows the texture (stones and tufts show first). Ctrl+drag on the map changes the brush size and softness. Hold Shift while painting for a straight line: it runs along whichever way the stroke first moves. Let go of Shift to paint freely again. Shape modes paint rectangles or click-the-corners shapes, handy for water and roofs. Each ground layer has"
},
{
"p": "The tools",
"h": "Pen",
"u": "tools.html#pen",
"t": "Draw any line, then decide what it is: a path, bridge, wall, cliff, waterfall, fire, a line of assets, a floor or stairs. Click to add points. Double-click, Enter or right-click finishes; click the first point to close the shape. Hold Shift as you finish to draw another. Change what a line is (path, wall, cliff...) any time in Properties. Each point has its own width. Right-click a point or segment to split, delete, straighten, bend or close the shape. Paths take textured style sets with end caps and corners. A bridge has its own deck height and casts a shadow into the drop. Pen > Stairs drags"
},
{
"p": "The tools",
"h": "Curves and handles",
"u": "tools.html#pen",
"t": "Click and drag while drawing to pull a point out into a curve. The yellow handle shows the curve's direction. Drag the square at the end of a yellow handle to turn the curve. The other side turns with it, so the line stays smooth. Hold Alt to break the point and move one side on its own, for a sharp twist. Handles snap back to a standard length (about a third of the way to the next point) when you let go. Hold Shift as you let go to keep the length you dragged. On a finished line, double-click it to edit, then click a point in Move points or Curve mode to see its handles. A sharp point shows f"
},
{
"p": "The tools",
"h": "Ropes, beams and garlands",
"u": "tools.html#pen",
"t": "A line that lies on something (a rope along a dock, a beam across a gap) gets Lift (ft) and Thickness (ft) in Properties > Height, in steps down to 0.05 ft. Set Lift to the height of what it lies on, so it takes the light up there instead of that thing's shadow. A Thickness above 0 makes it cast its own thin shadow (about 0.2 for a rope). Both work with 3D lighting."
},
{
"p": "The tools",
"h": "Cliffs, dunes and banks",
"u": "tools.html#pen",
"t": "Every cliff look with a picture, and the newer Breakup, Round top and Submerge settings: Cliffs, dunes and hills. Make a line a cliff in Properties. Close the shape for a plateau (or a pit with Inside is: Low ground). The line is the top edge; Face depth is how far the side reaches down. Look sets a whole style in one go: painted rock, grey slabs, sandstone, earth bank, mountain blocks, snowy rock, Sand dune and Earth slope. Sides: pick a rock face texture, or the Texture style for sand, earth or turf sides with no rock. Runs down the slope lays the texture along the drop; Slope shade darkens "
},
{
"p": "The tools",
"h": "Height",
"u": "tools.html#height",
"t": "Raise and lower the ground. Hills shade themselves, cliff tops get an ink line, and low ground is hazier, like a hand-drawn map. Modes: Raise, Lower, Flatten, Smooth, Cliff (terraces) and Level (an exact height). Steep ground can show a cliff texture or a cliff set laid along every drop. Show heights draws the height map over the map; the status bar shows the height under the cursor. For sharp drawn cliffs, use Pen and make the line a cliff."
},
{
"p": "The tools",
"h": "Place",
"u": "tools.html#place",
"t": "Places the art you picked in the Assets panel at the bottom of the window. Choose a folder or type in Search assets (names and tags both work). Click a picture, then click the map. You go back to Select with the object ready to move. Hold Shift while clicking the map to place several in a row. The Prefabs tab places ready-made groups the same way. Each asset knows its size in squares and its height in feet, so it lands at the right scale and casts the right shadow. The Assets panel runs along the bottom of the window."
},
{
"p": "The tools",
"h": "Build",
"u": "tools.html#build",
"t": "Draw rooms; the walls, floors, ink lines and doors are made for you. Thick walls go outside, thin ones between rooms. Draw a rectangle or click the corners of any shape. Draw inside a room to split it, beside it to add on. Round room: drag a box for a circle or oval with smooth curved walls (a tower, a well house, a hut). Right-click a room in the Build tool > Make round turns a room drawn as many short sides into a clean circle or oval. Doors and windows stay where they were. The tool bar over the map has the modes: rooms, wall lines, doors and windows, stairs, cut away, merge rooms (M). Door"
},
{
"p": "The tools",
"h": "Roofs",
"u": "tools.html#roofs",
"t": "Draw roofs and shape them: hip, gable, shed, flat, cone, dome and barrel. Shapes: drag out a rectangle, round, octagon, L, T, U or cross. Hold Shift to add to a roof, Alt to cut from it. Edit lines: drag the ridge, hips and corners; double-click a line to add a point and bend it; drag two points together to join them. Right-click an end to make it a gable or a hip. Draw line: draw a line across a roof to split a slope. Faces: give any slope its own texture, size and turn. Double-click a slope in Edit lines for quick turns. Ridge and hip caps, a gutter along the eave, and a faint shadow under b"
},
{
"p": "The tools",
"h": "Lights",
"u": "tools.html#lights",
"t": "Set the daylight and the sun, and place lamps. Scene darkness: Day, Dusk, Night, Cave. Daylight is how bright the shadows are. Master light: the sun or moon, where it comes from, how high, how strong, and whether it casts shadows. New light: torch, candle, campfire, brazier, magic, spotlight, floodlight, window, fireplace, moonlight. Click a preset, then click the map. Drag a lamp's handles to change its reach, falloff, aim and width. More in Light and shadow."
},
{
"p": "The tools",
"h": "Walls",
"u": "tools.html#walls",
"t": "Draw single walls (outside the Build tool), and add doors, windows and openings to any wall. Every wall style with a picture, Lift, Flip and roof blend: Walls and buildings. A wall can be 0 ft tall (Properties > Height): a textured line on the map. It casts no shadow, lets light through and is left out of VTT walls. Walls edit like Pen lines: points, widths, curves. Doors and windows snap to a wall, cut their own opening and slide along it. Open, close, flip, lock or make them one-way. Wall kinds: normal, invisible (for the virtual tabletop only) and terrain (blocks sight, not movement). Walls"
},
{
"p": "The tools",
"h": "Labels",
"u": "tools.html#labels",
"t": "Notes for the game master (a trap, a monster, stairs down) that sit over everything and are never lit. Click to add a label, double-click to type in it. Ctrl+B, I and U for bold, italic and underline. Pull arrows out of the box edge and aim them. Drop a tip back on the box to remove it. Show in exports decides whether a label goes into exported pictures. Export can also write a DM copy and a clean player copy."
},
{
"p": "The tools",
"h": "Grid",
"u": "tools.html#grid",
"t": "Turns and resizes the snap guide, so you can line things up with a building drawn at an angle. The map's own grid never moves, so exports and virtual tabletops stay aligned. Square, pointy hex and flat hex grids. Snap to corners, centres or edge middles. Hold Alt while placing to ignore the snap. Grid line colour and strength are in File > Settings."
},
{
"p": "The tools",
"h": "Specialized tools",
"u": "tools.html#specialized-tools",
"t": "Less common tools live in Tools > Specialized so they do not crowd the rail: Waterfall: a fall between two water levels with a plunge pool, spray and mist. Click the lip where the water tips over, then where it lands (more clicks bend it); double-click, Enter or right-click finishes, Esc drops the line, Backspace takes back a point. Foam, speed, spray and mist are set per waterfall in Properties. Waterfalls made from water over a cliff are curves: a start, middle and end point along the edge with curve handles, and an orange bottom curve you drag to where the water lands (older ones: Propertie"
},
{
"p": "Troubleshooting",
"h": "Troubleshooting",
"u": "troubleshooting.html",
"t": "The usual problems and their fixes. Click a question to open it."
},
{
"p": "Troubleshooting",
"h": "Lighting",
"u": "troubleshooting.html#lighting",
"t": "I don't see any sun shadows The sun switch at the top right (the first of the speed switches) may be off. The Lights panel says so and has a Show sun shadows button. See Speed switches. In the Lights tool, check On and Cast shadows under Master light. With Daylight at 100% shadows are faint. Lower it, or raise Shadow depth. The object needs a height: props use Height (ft), and the layer needs Casts sun shadows. A lamp does not light something With 3D lighting (the default) a lamp lights by height: check the lamp's Height and whether a wall, roof or tall prop is between them. With classic 2D li"
},
{
"p": "Troubleshooting",
"h": "Speed",
"u": "troubleshooting.html#speed",
"t": "The editor feels slow View > Fast editing turns heavy effects off and draws at 50%. View > Full quality puts them back. Or turn single speed switches off at the top right: animation and contact shade cost the most on big maps. Lower the render scale (the % box at the top right). The map looks softer; exports are not affected. The status bar shows frames per second and how long the map takes to draw, so you can see what helped. The map looks soft or blurry The render scale (top right) is below 100%, or Fast editing is on. Set it back to 100% or use View > Full quality."
},
{
"p": "Troubleshooting",
"h": "Files",
"u": "troubleshooting.html#files",
"t": "Ink Hammer closed and I lost my work Start Ink Hammer again. If there is an autosaved copy newer than your file, it asks Recover unsaved work. Click Recover, then save. Ink Hammer autosaves every 2 minutes. Your last saved version is also kept beside the map as a .bak file. Art is missing when I open a map on another computer Package the map on the first computer with File > Package map with its assets, then open the packaged copy. Windows won't start Ink Hammer.exe On the Windows protected your PC screen click More info, then Run anyway. The beta is not code-signed yet."
},
{
"p": "Troubleshooting",
"h": "Claude",
"u": "troubleshooting.html#claude",
"t": "Claude can't reach Ink Hammer See Connect Claude: if it does not work."
},
{
"p": "Troubleshooting",
"h": "Reporting a bug",
"u": "troubleshooting.html#reporting-a-bug",
"t": "Help > Report a bug... opens a short form: the area, what happened, the steps, how to reach you and an optional picture. Your Ink Hammer version, Windows version and graphics card are added for you. Send sends it; Copy instead copies it all: paste it into #bug-reports on the Anvil N Ink Discord if sending does not work."
},
{
"p": "Walls and buildings",
"h": "Walls and buildings",
"u": "walls.html",
"t": "Single walls, fences and hedges come from the Walls tool or any Pen line. Whole buildings with rooms, doors and roofs come from the Build and Roofs tools. This page shows the wall styles and the newer ways to shape them."
},
{
"p": "Walls and buildings",
"h": "Drawing walls",
"u": "walls.html#walls",
"t": "Walls tool (W): click to add points, double-click or Enter to finish. Walls edit like Pen lines: points, widths, curves. Pick a style in the tool panel or in Properties. Height (ft) sets how tall it is for shadows and lighting; a 0 ft wall is a textured line that casts no shadow. Doors and windows snap to a wall, cut their own opening and slide along it. Wall kinds: normal, invisible (for the virtual tabletop only) and terrain (blocks sight, not movement). Walls view in the top bar shows what a virtual tabletop gets."
},
{
"p": "Walls and buildings",
"h": "Wall styles",
"u": "walls.html#styles",
"t": "Every style in the Anvil Pack, drawn as the same corner with the afternoon sun from the top left. Adobe wall Bone wall Braded Rope Candle ledge wall Castle battlement wall Cave rock wall Dark stone wall Fieldstone wall Gallery balustrade Grey-gold marble wall Hedge Iron bars Iron fence Library bookshelf wall Light stone wall Log palisade Picket fence Plank wall Red brick wall Red brick wall (muted) Root tunnel wall Rough stone wall Ruined stone wall Sandstone wall Thick castle wall Timber frame wall Train line Wattle and daub wall Wood wall"
},
{
"p": "Walls and buildings",
"h": "Lift: walls off the ground New in 0.9.24",
"u": "walls.html#lift",
"t": "A railing along a walkway, a beam across a gap, a screen hanging from a ceiling: Properties > Height > Lift (ft) hangs a wall that many feet up. Its shadow lands apart from it and light passes under it, in both the flat and the 3D lighting. Height is still how tall the wall itself is."
},
{
"p": "Walls and buildings",
"h": "Flip New in 0.9.24",
"u": "walls.html#flip",
"t": "Properties > Look > Flip has Left-right and Top-bottom buttons for walls, lines, buildings and roofs. With several things selected they flip as one piece across the middle of the selection: a house with its roof, walls and props mirrors together, and doors keep swinging the mirrored way. F flips a single building or roof. Before Flip left-right: building and roof together Cliffs, waterfalls, spills and fire do not flip: their high side or the way they flow would swap."
},
{
"p": "Walls and buildings",
"h": "Roof blend New in 0.9.24",
"u": "walls.html#roof-blend",
"t": "A drawn roof (Roofs tool) has Blend in Properties > Look: Normal, Multiply, Add or Subtract. The roof keeps its sun and lamp shading. Multiply with a lower opacity makes a shadowy overhang that lets the floor and walls show through. Normal Multiply, opacity 0.8: rooms show through Screen, Overlay and the other blends are not offered for drawn roofs: a roof is lit as it is drawn, and those blends would light what is under it a second time. Roof layers (painted roofs) take every blend."
},
{
"p": "Walls and buildings",
"h": "Selecting several things",
"u": "walls.html#selection",
"t": "A box drag picks everything the box touches, by its real shape. With different kinds of things selected, Properties shows only the settings they all have. Turning or scaling a building with R and [ ] works like the mouse: the walls keep their thickness, and a turned building's box turns with it."
},
{
"p": "Water, the sea and waterfalls",
"h": "Water, the sea and waterfalls",
"u": "water.html",
"t": "Rivers, ponds, swamps and the sea are water layers you paint. Waterfalls form where water runs over a cliff. Everything here takes the sun and lamps."
},
{
"p": "Water, the sea and waterfalls",
"h": "Painting water",
"u": "water.html#paint",
"t": "Pick the Paint tool (B) and click the water button under Add a paint layer for a new water layer, or pick an existing one in Layers. Left-drag paints water, right-drag takes it away. [ and ] change the brush size. Select the water layer to see its settings in Properties. Pick a look... at the top sets them all at once; Save look... keeps your own. Banks get a wet edge, a band of light shallows and brush-stroke ripples on their own. The middle stays deep."
},
{
"p": "Water, the sea and waterfalls",
"h": "Water looks New in 0.9.24",
"u": "water.html#looks",
"t": "Every look in Pick a look..., on grass or sand with the afternoon sun from the top left. Rivers and streams flow; lakes, swamps and still water do not. The sea looks share one painted style. Clear stream Lake Murky river Swamp Sea: the default sea Ocean shore Painted sea Stormy sea: whitecaps and heavy surf Calm lagoon"
},
{
"p": "Water, the sea and waterfalls",
"h": "Rivers and flow New in 0.9.24",
"u": "water.html#flow",
"t": "Flowing water shows which way it runs: light streaks and tone along the current, also on wide slow rivers. Properties > Flow: Flows toward (deg), Speed (0 is still water) and Flow lines. Floating things and rocks in the water get foam around them, and Wake length sets how far their wake trails downstream."
},
{
"p": "Water, the sea and waterfalls",
"h": "The sea",
"u": "water.html#sea",
"t": "The quickest sea is Tools > Specialized > Ocean & coast: the sea, its beach and its seabed along one side of the map in one go. Its Sea look changes a sea already made. A sea layer's own settings are in Properties > Ocean: Waves toward (the wind; the arrow buttons set it to a map edge), Surf, Wave crests, Swell, Chop, Whitecaps, Tide line and Wet sand reach for the beach. Waves keep their direction past ships, logs and rocks, and a ship's wake fades into dashes behind it. New in 0.9.24"
},
{
"p": "Water, the sea and waterfalls",
"h": "Waterfalls",
"u": "water.html#waterfalls",
"t": "The Jungle of Falls sample map: streams over two cliff lines, with spills, spray and mist. From water over a cliff: paint the water across a cliff's top edge onto its face, then press Generate waterfalls in the water layer's Properties. A fall forms wherever the water goes over: its lip on the cliff's top line, its foot at the cliff's foot. Water that stops partway down turns to mist. Press it again after you repaint. On its own: Tools > Specialized > Waterfall. Click the lip, then where it lands (more clicks bend it). Falls take the colour of the water they pour into. Pick your own colour in "
},
{
"p": "Water, the sea and waterfalls",
"h": "Spills over a cliff",
"u": "water.html#spills",
"t": "Where water runs over a long cliff edge it spills as a sheet. The white water where it lands has a smooth, broken edge, and rocks in the spill show through the water with white streaks. Spills take Opacity and Tint in Properties. New in 0.9.24"
},
{
"p": "Water, the sea and waterfalls",
"h": "Tips",
"u": "water.html#tips",
"t": "Water is drawn on the graphics card. On a slow laptop, switch off Anim among the speed switches at the top right: moving water and torch flicker stop while you work. Exports are still pictures either way. See Speed switches."
},
{
"p": "What's new",
"h": "What's new",
"u": "whats-new.html",
"t": "What changed in each version. Your version is in Help > About Ink Hammer; Help > Check for updates says whether a newer one is out. Through the guide, a New in 0.9.24 tag marks what a version added."
},
{
"p": "What's new",
"h": "0.9.24 New in 0.9.24",
"u": "whats-new.html#v0-9-24",
"t": ""
},
{
"p": "What's new",
"h": "Cliffs, dunes and hills",
"u": "whats-new.html#cliffs-dunes-and-hills",
"t": "Cliffs are lit by their real shape: ledges catch the light, risers turn with the sun (also by lamplight), and a shadow lies where the rock meets the ground on the shaded side. Sandstone strata and Earth bank light layer by layer. Cliffs, dunes and hills New Breakup: the ground on top breaks onto the first ledges in patches, and the ground at the foot can creep up the lowest ones. Breakup New Round top for dunes and banks: the side rolls over from the top like a dome. Round top Cliff looks retuned: Earth slope is brown earth, Grassy hill is a low hill, the rock looks have breakup on, and a new "
},
{
"p": "What's new",
"h": "Props",
"u": "whats-new.html#props",
"t": "New Submerge: sink a prop into the ground from any side, with a ragged soft edge and a touch of dirt. Submerge A prop lying across the foot of a cliff no longer has a dark band cut across it."
},
{
"p": "What's new",
"h": "Walls, buildings and roofs",
"u": "whats-new.html#walls-buildings-and-roofs",
"t": "Flip for walls, lines, buildings and roofs, and a whole selection as one piece. F flips a building or roof. Flip Lift for walls: railings, beams and screens hang off the ground. Lift Drawn roofs take Blend (Multiply, Add, Subtract); roof layers take every blend. Roof blend Walls and buildings with Casts shadow off no longer throw shadows in the 3D lighting."
},
{
"p": "What's new",
"h": "Water",
"u": "whats-new.html#water",
"t": "The sea: waves keep their direction past ships and rocks, crests and troughs show in a still, a ship's wake fades into dashes. The sea looks are retuned to one painted style. Rivers show which way they flow. Clear stream, Lake, Murky river and Swamp have the painted look; banks have light shallows and brush-stroke ripples. Waterfalls break into falling strands, show a bright roll over the lip and take the colour of the water they pour into. Spills over cliffs land in smooth broken white water, and rocks show through the water running over them."
},
{
"p": "What's new",
"h": "Selecting and Properties",
"u": "whats-new.html#selecting-and-properties",
"t": "A box drag picks everything it touches by its real shape. With different kinds of things selected, Properties shows only the settings they all have. Every kind of thing shows its settings in the same order, and settings that do nothing for it are hidden. A turned building's selection box turns with it. R and [ ] turn and scale a building like the mouse does. Waterfalls, fire and cliffs are clicked near their centre line, so small falls stay easy to pick. Properties gets most of the right column; the 3D view starts folded."
},
{
"p": "What's new",
"h": "Speed and fixes",
"u": "whats-new.html#speed-and-fixes",
"t": "Maps open about a third faster. Water no longer flashes white as a map opens, and the map no longer blinks a few seconds after opening. Several undo fixes: a coast, a sea look change and the Fog command are each one Ctrl+Z."
},
{
"p": "What's new",
"h": "0.9.23 (Beta 2)",
"u": "whats-new.html#v0-9-23",
"t": "The current stable release (November 16, 2026). Earlier versions are listed on the store pages."
}
];
