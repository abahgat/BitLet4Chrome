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
  plaintorrent : /\.torrent$/i,
  mininova : /^http:\/\/www\.mininova\.org\/get\/\d+/i,
  thepiratebay : /^http:\/\/torrents\.thepiratebay\.org\/.*/i,
  sumotorrent : /^http:\/\/torrents\.sumotorrent\.com\/download\/*/i,
  torrentportal : /^http:\/\/torrentportal\.com\/download\/*/i,
  meganova : /^http:\/\/www\.meganova\.org\/download\/*/i,
  torrentreactorto : /^http:\/\/www\.torrentreactor\.to\/torrents\/download\/\d+/i,
  torrentreactornet : /^http:\/\/dl\.torrentreactor\.net\/download\.php\?id=.+/i,
  torrentbox : /^http:\/\/torrentbox\.com\/download\/.+/i,
  torrentmatrix : /^http:\/\/www\.torrentmatrix\.com\/download\.php\?id=.+/i,
  bitenova : /^http:\/\/www\.bitenova\.nl\/download\.php\?id=.+/i,
  demonoid : /^http:\/\/www\.demonoid\.com\/files\/download\/.+/i,
  torrentzap: /^http:\/\/torrentzap.com\/download\/\d+\/\d+/i,
  bitenova: /^http:\/\/www\.bitenova\.org\/download\.php\?id=.+/i
}

// TODO avoid duplicating the torrent link formats, at least on the long run
var torrentLinkFormatsArr = [
    "http://www.mininova.org/get/*",
    "*://*/*.torrent"
];