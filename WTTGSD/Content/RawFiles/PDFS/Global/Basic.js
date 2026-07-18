function HackClick(HackIndex) {
    sendEventToUnreal("LaunchHackClicked", { Index: HackIndex});
}