export class Slug {
  public value: string;

  constructor(value: string) {
    this.value = value;
  }

  /**
   * Receives a string and normalize it as a slug.
   *
   * Example: 'An example title' => 'an-example-title'.
   *
   * @param text {string}
   */
  static createFromText(text: string): Slug {
    const slug = text
      .normalize('NFKD')
      .toLocaleLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_+/g, '-')
      .replace(/-+/g, '-')
      .replace(/-+$/, '');

    return new Slug(slug);
  }
}
