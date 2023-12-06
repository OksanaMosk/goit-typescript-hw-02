/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}
interface allTitle {
  title: "string";
}
class Page extends Component<allTitle> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
