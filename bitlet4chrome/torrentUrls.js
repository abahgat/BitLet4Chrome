/*
Copyright 2010 Alessandro Bahgat Shehata and Daniele Castagna

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/*
 Map of regexps that can be used to identify the most common torrent urls
*/
var torrentLinkFormats =
{
    plaintorrent : /\.torrent$/,
    mininova : /^http:\/\/www\.mininova\.org\/get\/\d+/,
    thepiratebay : /^http:\/\/torrents\.thepiratebay\.org\/.*/,
    sumotorrent : /^http:\/\/torrents\.sumotorrent\.com\/download\/*/,
    torrentportal : /^http:\/\/torrentportal\.com\/download\/*/,
    meganova : /^http:\/\/www\.meganova\.org\/download\/*/,
    torrentreactorto : /^http:\/\/www\.torrentreactor\.to\/torrents\/download\/\d+/,
    torrentreactornet : /^http:\/\/dl\.torrentreactor\.net\/download\.php\?id=.+/,
    torrentbox : /^http:\/\/torrentbox\.com\/download\/.+/,
    torrentmatrix : /^http:\/\/www\.torrentmatrix\.com\/download\.php\?id=.+/,
    bitenova : /^http:\/\/www\.bitenova\.nl\/download\.php\?id=.+/,
    demonoid : /^http:\/\/www\.demonoid\.com\/files\/download\/.+/,
	torrentzap: /^http:\/\/torrentzap.com\/download\/\d+\/\d+/,
	bitenova: /^http:\/\/www\.bitenova\.org\/download\.php\?id=.+/
}