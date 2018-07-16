/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import * as ts from 'typescript';
import { ParsedClass } from './parsed_class';

export class ParsedFile {
  public decoratedClasses: ParsedClass[] = [];
  constructor(public sourceFile: ts.SourceFile) { }
}
