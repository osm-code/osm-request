import { parseString, Builder } from 'xml2js';
import packageJson from '../../package.json';

const osmRequestVersion = packageJson.version;

/**
 * Escape a string to make it XML parameter-safe
 * @param {string} str
 * @return {string}
 */
export function encodeXML(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Build a stringified OSM changeset
 * @param {string} [createdBy]
 * @param {string} [comment]
 * @return {string}
 */
export function buildChangesetXml(createdBy = '', comment = '') {
  return `
    <osm>
      <changeset>
        <tag k="created_by" v="${encodeXML(createdBy)}"/>
        <tag k="created_by:library" v="OSM Request ${osmRequestVersion}"/>
        <tag k="comment" v="${encodeXML(comment)}"/>
      </changeset>
    </osm>
  `;
}

/**
 * Convert a raw Element API response into a well formatted JSON object
 * @param {string} xml - The raw API response
 * @param {string} elementType - The type of the concerned OSM element (eg: node, way, relation)
 * @param {string} elementId - The ID of the concerned OSM element
 * @return {Promise}
 */
export function convertElementXmlToJson(xml, elementType, elementId) {
  return xmlToJson(xml).then(result => ({
    ...result,
    _id: elementId,
    _type: elementType
  }));
}

/**
 * Convert a raw Notes API response into a well formatted JSON object
 * @param {string} xml - The raw API response
 * @return {Promise}
 */
export function convertNotesXmlToJson(xml) {
  return xmlToJson(xml)
    .then(result => result.osm.note)
    .then(notes =>
      notes.map(note => {
        const returnedNote = flattenAttributes(note);

        returnedNote.comments = [
          ...returnedNote.comments.comment.map(comment =>
            flattenAttributes(comment)
          )
        ];

        return returnedNote;
      })
    );
}

/**
 * XML converted with the xmlToJson function contain some weird objects
 * Eg:
 * {
 *   $: {
 *     attribute1: 'value1',
 *     attribute2: 'value2'
 *   },
 *   attribute3: ['value3'],
 *   attribute4: ['value4'],
 * }
 *
 * That function flatten them
 * Eg:
 * {
 *   attribute1: 'value1',
 *   attribute2: 'value2',
 *   attribute3: 'value3',
 *   attribute4: 'value4',
 * }
 *
 * @param {Object} object
 * @return {Object}
 */
export function flattenAttributes(object) {
  const flatObject = {
    ...object.$
  };

  Object.keys(object).forEach(key => {
    if (key === '$') return;
    if (!object[key]) return;
    if (object[key].length === 0) return;

    flatObject[key] = object[key][0];
  });

  return flatObject;
}

/**
 * Convert a stringified XML into a JSON object
 * @param {string} xml
 * @return {Promise}
 */
export function xmlToJson(xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) reject(err);

      resolve(result);
    });
  });
}

/**
 * Convert a JSON object into a stringified XML
 * @param {Object} json
 * @return {string}
 */
export function jsonToXml(json) {
  const builder = new Builder({
    xmldec: {
      version: '1.0',
      encoding: 'UTF-8',
      standalone: null
    }
  });
  return builder.buildObject(json);
}
