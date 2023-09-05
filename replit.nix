{ pkgs }: {
	deps = [
		pkgs.htop
  pkgs.mono4
  pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
	];
}