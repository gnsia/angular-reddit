export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp() : void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

    // domain() 은 URL에서 도메인을 추출하는 유틸리티 함수다.
    domain() : string | null {
        try {
            // 예: http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1];
            // 예: foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}