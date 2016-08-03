{
/*
	 // Place your snippets for JavaScript here. Each snippet is defined under a snippet name and has a prefix, body and 
	 // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	 // $1, $2 for tab stops, ${id} and ${id:label} and ${1:label} for variables. Variables with the same id are connected.
	 // Example:
*/
	"React Class Component": {
		"prefix": "react-class",
		"body": [
			"import React, {PropTypes} from 'react';\n",
			"class ${1:Class1} extends React.Component {",
			"\trender () {",
			"\t\treturn (",
			"\t\t\t<div>$2</div>",
			"\t\t);\n\t}",
			"}\n",
			"${1}.propTypes = {",
			"	// myProps: PropTypes.string.isRequired",
			"};\n",
			"export default $1;"
		]
	},

	"React Container Component": {
		"prefix": "react-smart",
		"body": [
			"import React, {PropTypes} from 'react';",
			"import {connect} from 'react-redux';",
			"import {bindActionCreators} from 'redux';",
			"import * as ${2:actionHandler} from '../../actions/${2}';\n",

			"class ${1:NewPage} extends React.Component {",
			"\tconstructor(props, context) {",
			"\t\tsuper(props, context);",
			"\t}\n",

			"\trender() {",
				"\t\treturn (",
					"\t\t\t<div>$3</div>",
				"\t\t);",
			"\t}\n",
			"}\n",

			"${1}.propTypes = {",
			"\t// myProps: PropTypes.string.isRequired",
			"};\n",

			"function mapStateToProps(state) {",
				"\treturn {",
					"\t\tstate: state",
				"\t};",
			"}\n",

			"function mapDispatchToProps(dispatch) {",
				"\treturn {",
					"\t\tactions: bindActionCreators($2, dispatch)",
				"\t};",
			"}\n",

			"export default connect(mapStateToProps, mapDispatchToProps)($1);"
		]
	},

	"React Stateless Component": {
		"prefix": "react-stateless",
		"body": [
			"import React, {PropTypes} from 'react';\n",

			"const ${1:StatelessComponent} = (props) => {",
			"\treturn (",
				"\t\t<div>$2</div>",
			"\t);",
			"};\n",

			"${1}.PropTypes = {",
			"\t// myProp: PropTypes.string.isRequired",
			"};\n",

			"export default $1;"
		]
	}
}
