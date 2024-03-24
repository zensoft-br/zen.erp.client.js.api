* Change project version in `package.json`

* Commit the project

```
git commit -m "v1.0.18"
```

* Create an annotated tag

```
git tag -a v1.0.18 -m "v1.0.18"
```

* Push tag to remote

```
git push origin --tags -f
```

* Publish project

```
npm publish
```