class Serie {
    private id: number;
    private name: string;
    private channel: string;
    private seasons: number;

    constructor(id: number, name: string, channel: string, seasons: number){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
    }

    getId(): number{
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getChannel(): string {
        return this.channel;
    }
    getSeasons(): number {
        return this.seasons;
    }
  
    setId(id: number): void {
        this.id = id;
    }
    setName(name: string): void {
        this.name = name;
    }
    setChannel(channel: string): void {
        this.channel = channel;
    }
    setSeasons(seasons: number): void {
        this.seasons = seasons;
    }
  }

  
export const series = [
    new Serie (1,"Breaking Bad","AMC", 5) ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6),
    
    new Serie (3, "Game of Thrones","HBO", 7),
  
    new Serie (4, "The Big Bang Theory", "CBS", 12),
    
    new Serie (5, "Sherlock", "BBC",  4),
  
    new Serie (6, "A Very English Scandal", "BBC", 2),
  
    new Serie(7, "The Crown", "Netflix", 4),
  
    new Serie(8, "Peaky Blinders", "BBC", 5),
    
    new Serie(9, "Black Mirror", "Netflix", 5)
  
  ];
